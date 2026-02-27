import { createContext, useContext, useState, useCallback, useRef } from "react";
import PropTypes from "prop-types";

const AudioPlayerContext = createContext(null);

export const AudioPlayerProvider = ({ children }) => {
  const [currentPlayingId, setCurrentPlayingId] = useState(null);
  const audioElementsRef = useRef({});
  const [, forceUpdate] = useState(0);

  // Register an audio element
  const registerAudio = useCallback((id, audioElement) => {
    audioElementsRef.current[id] = audioElement;
    forceUpdate(n => n + 1); // Trigger re-render for UI updates
  }, []);

  // Stop all other players except the given id
  const stopOthers = useCallback((excludeId) => {
    Object.entries(audioElementsRef.current).forEach(([id, audio]) => {
      if (id !== excludeId && audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    });
    setCurrentPlayingId(excludeId);
  }, []);

  // Stop a specific player and clear playing state
  const stop = useCallback((id) => {
    const audio = audioElementsRef.current[id];
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    if (currentPlayingId === id) {
      setCurrentPlayingId(null);
    }
  }, [currentPlayingId]);

  // Clear playing state (called when song ends naturally)
  const clearPlaying = useCallback(() => {
    setCurrentPlayingId(null);
  }, []);

  // Check if a player is currently playing
  const isPlaying = useCallback((id) => {
    return currentPlayingId === id;
  }, [currentPlayingId]);

  // Unregister audio on cleanup (optional, for memory management)
  const unregisterAudio = useCallback((id) => {
    delete audioElementsRef.current[id];
    forceUpdate(n => n + 1);
  }, []);

  return (
    <AudioPlayerContext.Provider
      value={{
        currentPlayingId,
        registerAudio,
        unregisterAudio,
        stopOthers,
        stop,
        clearPlaying,
        isPlaying,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};

AudioPlayerProvider.propTypes = {
  children: PropTypes.node,
};

export const useAudioPlayerContext = () => {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error("useAudioPlayerContext must be used within AudioPlayerProvider");
  }
  return context;
};
