import React from 'react';
import PropTypes from 'prop-types';
import {reviewPropTypes} from '../../props-validation';

const MovieReviews = ({reviews}) => {
  const reviewsFirtCol = reviews.slice(0, Math.round(reviews.length / 2));
  const reviewsSecondCol = reviews.slice(Math.round(reviews.length / 2));
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviewsFirtCol.map((review, i) => {
          return (
            <div key={review.id + i} className="review">
              <blockquote className="review__quote">
                <p className="review__text">{review.comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{review.user.name}</cite>
                  <time className="review__date" dateTime="2016-12-24">{review.date}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{review.rating}</div>
            </div>
          );
        })}
      </div>
      <div className="movie-card__reviews-col">
        {reviewsSecondCol.map((review, i) => {
          return (
            <div key={review.id + i} className="review">
              <blockquote className="review__quote">
                <p className="review__text">{review.comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{review.user.name}</cite>
                  <time className="review__date" dateTime="2016-12-24">{review.date}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{review.rating}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewPropTypes).isRequired,
  )
};

export default MovieReviews;
