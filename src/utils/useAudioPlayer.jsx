import { useEffect, useState } from "react";

const useAudioPlayer = (src) => {
  const [audio] = useState(new Audio(src));
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);

    const handleDurationChange = () => setDuration(audio.duration);

    const handleVolumeChange = () => setVolume(audio.volume);

    const handleEnded = () => {
      audio.currentTime = 0;
      setIsPlaying(false);
    };

    const handleLoadStart = () => {
      setIsLoading(true);
      setError(null);
    };

    const handleLoadedData = () => {
      setIsLoading(false);
    };

    const handleError = (event) => {
      setIsLoading(false);
      setError(event.message || "Failed to load audio");
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
  }, [audio]);

  const playPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const seek = (newTime) => {
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const mute = () => {
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const setVolumeLevel = (newVolume) => {
    audio.volume = newVolume;
    setVolume(newVolume);
  };

  const resetAudio = () => {
    if (audio.currentTime === duration) {
      audio.currentTime = 0;
      setCurrentTime(0);
    }
  };

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
