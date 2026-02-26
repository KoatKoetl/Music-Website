import PropTypes from "prop-types";
import React, { useEffect, useState, useRef } from "react";

const LazyAudioPlayer = ({ src, songId, AudioPlayerComponent }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" },
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="z-10 my-2 hidden flex-1 flex-wrap justify-center sm:flex"
    >
      {isIntersecting && (
        <AudioPlayerComponent src={src} songId={songId} key={src} />
      )}
    </div>
  );
};

LazyAudioPlayer.propTypes = {
  src: PropTypes.string,
  songId: PropTypes.number,
  AudioPlayerComponent: PropTypes.elementType,
};

export default LazyAudioPlayer;
