import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {moviePropTypes} from '../../props-validation';

const Videoplayer = ({isPlaying, movie}) => {
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
      ref={videoRef}
      src={movie.previewVideo}
      poster={movie.previewImg}
      muted
      loop
      autoPlay
    />
  );
};

Videoplayer.propTypes = {
  movie: PropTypes.shape(moviePropTypes).isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default Videoplayer;
