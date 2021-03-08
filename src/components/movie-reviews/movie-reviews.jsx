import React from 'react';
import PropTypes from 'prop-types';
import {reviewPropTypes} from '../../props-validation';
import {formatDate} from '../../common';

const MovieReviews = ({comments}) => {
  const commentsFirtCol = comments.slice(0, Math.round(comments.length / 2));
  const commentsSecondCol = comments.slice(Math.round(comments.length / 2));
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {commentsFirtCol.map((review, i) => {
          return (
            <div key={review.id + i} className="review">
              <blockquote className="review__quote">
                <p className="review__text">{review.comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{review.user.name}</cite>
                  <time className="review__date" dateTime={review.date}>{formatDate(review.date)}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{review.rating}</div>
            </div>
          );
        })}
      </div>
      <div className="movie-card__reviews-col">
        {commentsSecondCol.map((review, i) => {
          return (
            <div key={review.id + i} className="review">
              <blockquote className="review__quote">
                <p className="review__text">{review.comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{review.user.name}</cite>
                  <time className="review__date" dateTime={review.date}>{formatDate(review.date)}</time>
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
  comments: PropTypes.arrayOf(
      PropTypes.shape(reviewPropTypes).isRequired,
  )
};

export default MovieReviews;
