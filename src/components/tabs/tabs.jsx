import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MovieDetails from '../movie-details/movie-details';
import MovieOverview from '../movie-overview/movie-overview';
import MovieReviews from '../movie-reviews/movie-reviews';
import {moviePropTypes, reviewPropTypes} from '../../props-validation';
import {fetchComments} from '../../store/api-actions';
import {getComments, getMovieStatus} from '../../store/active-movie/selectors';

const tabTitles = [`Overview`, `Details`, `Reviews`];


const Tabs = ({movie, comments, onReviewsTabClick, movieStatus}) => {
  const [activeTab, setActiveTab] = useState(`Overview`);

  const getActiveTab = (tab) => {
    switch (tab) {
      case `Overview`: return <MovieOverview movie={movie} movieStatus={movieStatus} />;
      case `Details`: return <MovieDetails movie={movie} />;
      case `Reviews`: return <MovieReviews comments={comments} />;
      default: return <MovieOverview />;
    }
  };

  return (
    movieStatus === `LOADED` &&
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabTitles.map((tabTitle, id) => {
            return (
              <li key={tabTitle + id} className={tabTitle === activeTab ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
                <a href="#" className="movie-nav__link"
                  onClick={(evt) => {
                    evt.preventDefault();
                    setActiveTab(evt.target.text);
                    return evt.target.text === `Reviews` ? onReviewsTabClick(movie.id) : ``;
                  }}>
                  {tabTitle}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      {getActiveTab(activeTab)}
    </div>
  );
};

Tabs.propTypes = {
  movie: PropTypes.shape(moviePropTypes).isRequired,
  comments: PropTypes.arrayOf(
      PropTypes.shape(reviewPropTypes).isRequired,
  ),
  onReviewsTabClick: PropTypes.func.isRequired,
  movieStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  comments: getComments(state),
  movieStatus: getMovieStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onReviewsTabClick(id) {
    dispatch(fetchComments(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
