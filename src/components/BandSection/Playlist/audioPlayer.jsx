import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const useAudioPlayer = (src) => {
  // Create a new Audio html element
  const [audio] = useState(new Audio(src));

  // All states of the Audio element
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    // Event listener to get the current time after render
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    // Event listener to get the duration after render
    const handleDurationChange = () => {
      setDuration(audio.duration);
    };

    // Event listener to get the volume after render
    const handleVolumeChange = () => {
      setVolume(audio.volume);
    };

    const handleEnded = () => {
      // Restart the audio when it reaches the end
      audio.currentTime = 0;
      setIsPlaying(false);
    };

    // Add all event listeners to the audio element
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("durationchange", handleDurationChange);
    audio.addEventListener("volumechange", handleVolumeChange);
    audio.addEventListener("ended", handleEnded);

    // Remove all event listeners from the audio element after getting all the data
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("durationchange", handleDurationChange);
      audio.removeEventListener("volumechange", handleVolumeChange);
      audio.removeEventListener("ended", handleEnded);
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
    playPause,
    seek,
    mute,
    setVolumeLevel,
  } = useAudioPlayer(src);

  return (
    <>
      <div className="mx-1 flex items-center gap-2 pb-2 pt-1">
        <button
          className="rounded-sm bg-dark-pink px-2 py-1"
          onClick={playPause}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <input
          type="range"
          value={currentTime}
          max={duration}
          onChange={(e) => seek(e.target.value)}
          className="flex-1"
        />
        <span>
          {formatTime(currentTime)}/{formatTime(duration)}
        </span>
        <button onClick={mute}>{isMuted ? "Unmute" : "Mute"}</button>
        <input
          type="range"
          value={volume}
          max={1}
          step={0.01}
          onChange={(e) => setVolumeLevel(e.target.value)}
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

export default AudioPlayer;
