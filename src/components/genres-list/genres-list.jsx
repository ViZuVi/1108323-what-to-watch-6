import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {changeGenre, getFilteredMovies} from '../../store/action';
import {getGenres, getActivegenre} from '../../store/data/selectors';

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
  genres: getGenres(state),
  activeGenre: getActivegenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(changeGenre(genre));
    dispatch(getFilteredMovies(genre));
  }
});

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
