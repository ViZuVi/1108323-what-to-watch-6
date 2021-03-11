import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const Videoplayer = ({isPlaying, src, poster}) => {
  const videoRef = useRef();

  useEffect(() => {

    const video = videoRef.current.play();
    if (video !== undefined) {
      video.then((_) => {
      })
      .catch((_error) => {

      });
    }

    return () => {
      videoRef.current.pause();
      videoRef.current.oncanplaytrough = null;
      videoRef.current = null;
    };
  }, [isPlaying]);

  return (
    <video
      className="player__video"
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      loop
      autoPlay
      controls
    />
  );
};

Videoplayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool,
};

export default Videoplayer;
