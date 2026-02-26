import {
  faCircleNotch,
  faPause,
  faPlay,
  faVolumeHigh,
  faVolumeXmark,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import useAudioPlayer from "../../../utils/useAudioPlayer";

const AudioPlayer = ({ src, songId }) => {
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
  } = useAudioPlayer(src, songId);

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;
  const volumePercent = volume * 100;

  if (error) {
    return (
      <div className="flex flex-1 items-center justify-center rounded-full text-center text-xs font-semibold text-red-400 md:text-sm">
        <FontAwesomeIcon icon={faTriangleExclamation} className="mr-1" />
        <span>Preview unavailable</span>
      </div>
    );
  }

  return (
    <>
      <div className="mr-4 flex flex-1 items-center gap-2">
        <button
          className="rounded-sm bg-dark-blue px-2 transition-colors sm:px-3 sm:py-1 mediaPointer:hover:bg-black"
          onClick={playPause}
          disabled={isLoading}
          aria-label="button play/pause"
        >
          {isLoading ? (
            <FontAwesomeIcon icon={faCircleNotch} className="fa-spin w-2 sm:size-4" />
          ) : isPlaying ? (
            <FontAwesomeIcon icon={faPause} className="w-2 sm:size-4" />
          ) : (
            <FontAwesomeIcon icon={faPlay} className="w-2 sm:size-4" />
          )}
        </button>

        <div className="relative flex min-w-[150px] flex-1 items-center sm:min-w-[200px] md:min-w-[250px] lg:min-w-[300px]">
          <input
            type="range"
            value={currentTime}
            step={0.1}
            max={duration || 0}
            onChange={(e) => seek(e.target.value)}
            disabled={isLoading || !duration}
            className="audio-progress-bar h-1 w-full cursor-pointer appearance-none rounded-full bg-gray-600 bg-none bg-no-repeat focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            style={{
              backgroundImage: `linear-gradient(to right, #1e40af ${progressPercent}%, #4b5563 ${progressPercent}%)`,
            }}
            aria-label="song progress player bar"
          />
        </div>

        <span className="min-w-[70px] text-xs sm:text-sm">
          {formatTime(currentTime)}/{formatTime(duration)}
        </span>

        <button onClick={mute} disabled={isLoading} aria-label="button mute">
          {isMuted || volume === 0 ? (
            <FontAwesomeIcon icon={faVolumeXmark} className="w-4 sm:w-6" />
          ) : (
            <FontAwesomeIcon icon={faVolumeHigh} className="w-4 sm:w-6" />
          )}
        </button>

        <div className="relative w-[50px] min-w-[40px] sm:w-[70px]">
          <input
            type="range"
            value={volume}
            max={1}
            step={0.01}
            onChange={(e) => setVolumeLevel(e.target.value)}
            disabled={isLoading}
            className="volume-bar h-1 w-full cursor-pointer appearance-none rounded-full bg-gray-600 bg-none bg-no-repeat focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            style={{
              backgroundImage: `linear-gradient(to right, #1e40af ${volumePercent}%, #4b5563 ${volumePercent}%)`,
            }}
            aria-label="volume bar"
          />
        </div>
      </div>
    </>
  );
};

const formatTime = (time) => {
  if (!time || isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

AudioPlayer.propTypes = {
  src: PropTypes.string,
  songId: PropTypes.number,
};

export default AudioPlayer;
