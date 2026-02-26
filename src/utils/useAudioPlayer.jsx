import React, { useEffect, useState, useCallback, useRef } from "react";
import { useAudioPlayerContext } from "../context/AudioContext";

const MAX_AUDIO_RETRIES = 3;
const AUDIO_RETRY_DELAY = 500;

// CORS proxy for Deezer preview URLs (using allorigins as fallback)
const CORS_PROXY = "https://api.allorigins.win/raw?url=";

const useAudioPlayer = (src, songId) => {
  const { registerAudio, unregisterAudio, stopOthers, isPlaying: isGlobalPlaying, clearPlaying } = useAudioPlayerContext();
  
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const audioRef = useRef(null);
  const isInitializedRef = useRef(false);

  // Get audio source with CORS proxy if needed
  const getAudioSrc = useCallback((originalSrc) => {
    if (!originalSrc) return null;

    // Deezer preview URLs often have CORS issues, use proxy
    if (originalSrc.includes("cdns-preview") || originalSrc.includes("deezer")) {
      return `${CORS_PROXY}${encodeURIComponent(originalSrc)}`;
    }
    return originalSrc;
  }, []);

  // Initialize audio (only once per component mount)
  useEffect(() => {
    if (!src || isInitializedRef.current) return;

    const newAudio = new Audio();
    newAudio.preload = "metadata";
    newAudio.crossOrigin = "anonymous";
    audioRef.current = newAudio;
    setAudio(newAudio);
    isInitializedRef.current = true;

    // Register this audio element with the context
    if (songId) {
      registerAudio(songId, newAudio);
    }

    return () => {
      if (newAudio) {
        newAudio.pause();
        newAudio.src = "";
        newAudio.load();
      }
      if (songId) {
        unregisterAudio(songId);
      }
      isInitializedRef.current = false;
    };
  }, [songId, registerAudio, unregisterAudio]);

  // Load audio source
  useEffect(() => {
    if (!audio || !src) return;

    const audioSrc = getAudioSrc(src);

    const loadAudio = () => {
      if (!audioSrc) {
        setError("Invalid audio source");
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);

      audio.src = audioSrc;
      audio.load();
    };

    loadAudio();
  }, [audio, src, getAudioSrc]);

  // Setup event listeners
  useEffect(() => {
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleDurationChange = () => {
      setDuration(audio.duration);
      setIsLoading(false);
    };

    const handleVolumeChange = () => setVolume(audio.volume);

    const handleEnded = () => {
      audio.currentTime = 0;
      setIsPlaying(false);
      clearPlaying();
    };

    const handleLoadStart = () => {
      setIsLoading(true);
      setError(null);
    };

    const handleLoadedData = () => {
      setIsLoading(false);
      setRetryCount(0);
    };

    const handleError = (event) => {
      const errorCode = audio.error?.code;
      let errorMessage = "Failed to load audio";

      switch (errorCode) {
        case 1: // MEDIA_ERR_ABORTED
          errorMessage = "Audio loading aborted";
          break;
        case 2: // MEDIA_ERR_NETWORK
          errorMessage = "Network error - preview may be unavailable";
          break;
        case 3: // MEDIA_ERR_DECODE
          errorMessage = "Audio decode error - format not supported";
          break;
        case 4: // MEDIA_ERR_SRC_NOT_SUPPORTED
          errorMessage = "Preview not available (CORS or expired URL)";
          break;
        default:
          errorMessage = "Failed to load preview";
      }

      console.warn(`Audio error for ${src}:`, errorMessage, audio.error);

      if (retryCount < MAX_AUDIO_RETRIES) {
        // Retry loading
        setTimeout(() => {
          setRetryCount((prev) => prev + 1);
          console.log(`Retrying audio load (${retryCount + 1}/${MAX_AUDIO_RETRIES})`);
          audio.load();
        }, AUDIO_RETRY_DELAY * (retryCount + 1));
      } else {
        setIsLoading(false);
        setError(errorMessage);
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("durationchange", handleDurationChange);
    audio.addEventListener("volumechange", handleVolumeChange);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("loadstart", handleLoadStart);
    audio.addEventListener("loadeddata", handleLoadedData);
    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("durationchange", handleDurationChange);
      audio.removeEventListener("volumechange", handleVolumeChange);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("loadstart", handleLoadStart);
      audio.removeEventListener("loadeddata", handleLoadedData);
      audio.removeEventListener("error", handleError);
    };
  }, [audio, retryCount, src, clearPlaying]);

  const playPause = useCallback(() => {
    if (!audio) return;

    if (isPlaying) {
      // Pause the audio and clear global state
      audio.pause();
      setIsPlaying(false);
      clearPlaying();
    } else {
      // CRITICAL: Stop all other players FIRST, before playing this one
      stopOthers(songId);

      // Then play this audio
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.error("Playback error:", err);
        setError("Unable to play - preview may be restricted");
        setIsPlaying(false);
      });
    }
  }, [audio, isPlaying, songId, stopOthers, clearPlaying]);

  const seek = useCallback((newTime) => {
    if (!audio) return;
    audio.currentTime = parseFloat(newTime);
    setCurrentTime(parseFloat(newTime));
  }, [audio]);

  const mute = useCallback(() => {
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  }, [audio, isMuted]);

  const setVolumeLevel = useCallback((newVolume) => {
    if (!audio) return;
    audio.volume = parseFloat(newVolume);
    setVolume(parseFloat(newVolume));
  }, [audio]);

  const resetAudio = useCallback(() => {
    if (!audio) return;
    if (audio.currentTime === duration) {
      audio.currentTime = 0;
      setCurrentTime(0);
    }
  }, [audio, duration]);

  return {
    isPlaying,
    currentTime,
    duration,
    isMuted,
    volume,
    isLoading,
    error,
    playPause,
    seek,
    mute,
    setVolumeLevel,
    resetAudio,
  };
};

export default useAudioPlayer;
