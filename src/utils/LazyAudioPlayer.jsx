import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const LazyAudioPlayer = ({ src, AudioPlayerComponent }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasLoaded) {
            setIsIntersecting(true);
            setHasLoaded(true);
          }
        });
      },
      { threshold: 0.5 },
    );

    const target = document.getElementById(`lazy-audio-${src}`);
    if (target) {
      observer.observe(target);
    }

    return () => observer.disconnect();
  }, [src, hasLoaded]);

  return (
    <div
      id={`lazy-audio-${src}`}
      className="z-10 my-2 hidden flex-1 flex-wrap justify-center sm:flex"
    >
      {isIntersecting && <AudioPlayerComponent src={src} />}
    </div>
  );
};

LazyAudioPlayer.propTypes = {
  src: PropTypes.string,
  AudioPlayerComponent: PropTypes.elementType,
};

export default LazyAudioPlayer;
