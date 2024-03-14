import {
  faCircleNotch,
  faPause,
  faPlay,
  faVolumeHigh,
  faVolumeXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import useAudioPlayer from "../../../utils/useAudioPlayer";

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
      {error ? (
        <div className="flex flex-1 items-center justify-center rounded-full text-center text-lg font-semibold text-white md:text-xl">
          <span>{error}!</span>
        </div>
      ) : (
        <div className="mr-4 flex flex-1 items-center gap-2">
          <button
            className="rounded-sm bg-dark-gray px-2 transition-colors sm:px-3 sm:py-1 mediaPointer:hover:bg-accent mediaPointer:hover:text-accent-foreground"
            onClick={playPause}
            disabled={isLoading}
            aria-label="button play/pause"
          >
            {isLoading ? (
              <FontAwesomeIcon icon={faCircleNotch} className="fa-spin" />
            ) : isPlaying ? (
              <FontAwesomeIcon icon={faPause} className="w-2 sm:size-4" />
            ) : (
              <FontAwesomeIcon icon={faPlay} className="w-2 sm:size-4" />
            )}
          </button>

          <input
            type="range"
            value={currentTime}
            step={0.1}
            max={duration}
            onChange={(e) => seek(e.target.value)}
            disabled={isLoading}
            className="input-KINO flex-1"
            aria-label="song progress player bar"
          />

          <span className="text-sm sm:text-base">
            {formatTime(currentTime)}/{formatTime(duration)}
          </span>

          <button onClick={mute} disabled={isLoading} aria-label="button mute">
            {isMuted || volume === 0 ? (
              <FontAwesomeIcon icon={faVolumeXmark} className="w-4 sm:w-8" />
            ) : (
              <FontAwesomeIcon icon={faVolumeHigh} className="w-4 sm:w-8" />
            )}
          </button>

          <input
            type="range"
            value={volume}
            max={1}
            step={0.01}
            onChange={(e) => setVolumeLevel(e.target.value)}
            disabled={isLoading}
            className="input-KINO w-[50px] max-w-[100px] sm:w-auto"
            aria-label="volume bar"
          />
        </div>
      )}
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
