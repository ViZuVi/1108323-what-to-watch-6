import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MovieCard from '../movie-card/movie-card';
import {moviePropTypes} from '../../props-validation';

const MoviesList = ({filteredMovies}) => {
  return (

    <div className="catalog__movies-list">
      {filteredMovies.map((movie) => (<MovieCard movie={movie} key={movie.id} />))}

    </div>

  );
};

const mapStateToProps = (state) => ({
  filteredMovies: state.filteredMovies,
});

MoviesList.propTypes = {
  filteredMovies: PropTypes.arrayOf(
      PropTypes.shape(moviePropTypes).isRequired,
  ).isRequired
};

export {MoviesList};
export default connect(mapStateToProps, null)(MoviesList);
