import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {moviePropTypes} from '../../props-validation';
import Videoplayer from '../videoplayer/videoplayer';
import {useHistory} from 'react-router-dom';
import {getMovie} from '../../store/activeMovie/selectors';

const Player = ({movie}) => {
  const history = useHistory();
  return (
    <div className="player">
      <Videoplayer src={movie.videoLink} poster={movie.posterImg} ></Videoplayer>

      <button type="button" className="player__exit" onClick={() => history.goBack()} >Exit</button>

    </div>
  );
};

Player.propTypes = {
  movie: PropTypes.shape(moviePropTypes).isRequired,
};

const mapStateToProps = (state) => ({
  movie: getMovie(state),
});

export default connect(mapStateToProps, null)(Player);
