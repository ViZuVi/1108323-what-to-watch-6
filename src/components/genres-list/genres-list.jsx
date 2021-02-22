import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const GenresList = ({genres, activeGenre, onGenreClick}) => {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) => (
        <li key={genre + i} className={activeGenre === genre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}>
          <a href="#" className="catalog__genres-link" onClick={(evt) => {
            evt.preventDefault();
            onGenreClick(genre);
          }}>
            {genre}</a>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  genres: state.genres,
  activeGenre: state.activeGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.getFilteredMovies(genre));
  }
});

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
