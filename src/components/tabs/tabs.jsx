import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MovieDetails from '../movie-details/movie.details';
import MovieOverview from '../movie-overview/movie-overview';
import MovieReviews from '../movie-reviews/movie-reviews';
import {moviePropTypes, reviewPropTypes} from '../../props-validation';

const tabTitles = [`Overview`, `Details`, `Reviews`];


const Tabs = ({movie, reviews}) => {
  const [activeTab, setActiveTab] = useState(`Overview`);

  const getActiveTab = (tab) => {
    switch (tab) {
      case `Overview`: return <MovieOverview movie={movie} />;
      case `Details`: return <MovieDetails movie={movie} />;
      case `Reviews`: return <MovieReviews reviews={reviews} />;
      default: return <MovieOverview />;
    }
  };

  return (
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
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewPropTypes).isRequired,
  )
};

export default Tabs;
