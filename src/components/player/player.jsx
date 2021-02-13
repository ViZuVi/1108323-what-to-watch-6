import React from 'react';
import PropTypes from 'prop-types';
import {moviePropTypes} from '../../props-validation';

const Player = ({movie}) => {
  return (
    <div className="player">
      <video src={movie.videoLink} className="player__video" poster="img/player-poster.jpg" controls></video>

      <button type="button" className="player__exit">Exit</button>

    </div>
  );
};

Player.propTypes = {
  movie: PropTypes.shape(moviePropTypes).isRequired,
};

export default Player;
