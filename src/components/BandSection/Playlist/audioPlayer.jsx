import PropTypes from "prop-types";
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

const AudioPlayer = ({ src }) => {
  const {
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
  } = useAudioPlayer(src);

  return (
    <>
      {error && (
        <div className="flex items-center justify-center rounded-full text-xl font-semibold text-white">
          {error}!
        </div>
      )}
      <div className="flex flex-1 items-center gap-2">
        <button
          className="rounded-sm bg-dark-gray px-4 py-1"
          onClick={playPause}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : isPlaying ? "||" : ">"}
        </button>
        <input
          type="range"
          value={currentTime}
          step={0.1}
          max={duration}
          onChange={(e) => seek(e.target.value)}
          disabled={isLoading}
          className="input-KINO flex-1"
        />
        <span>
          {formatTime(currentTime)}/{formatTime(duration)}
        </span>
        <button onClick={mute} disabled={isLoading}>
          {isMuted ? "Unmute" : "Mute"}
        </button>
        <input
          type="range"
          value={volume}
          max={1}
          step={0.01}
          onChange={(e) => setVolumeLevel(e.target.value)}
          disabled={isLoading}
          className="input-KINO"
        />
      </div>
    </>
  );
};

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

AudioPlayer.propTypes = {
  src: PropTypes.string,
};

const LazyAudioPlayer = ({ src }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
          }
        });
      },
      { threshold: 0.5 }, // Adjust the threshold as needed
    );

    observer.observe(document.getElementById(`lazy-audio-${src}`));

    return () => observer.disconnect();
  }, [src]);

  return (
    <div id={`lazy-audio-${src}`} className="flex flex-1 flex-wrap">
      {isIntersecting && <AudioPlayer src={src} />}
    </div>
  );
};

LazyAudioPlayer.propTypes = {
  src: PropTypes.string,
};

export default LazyAudioPlayer;
