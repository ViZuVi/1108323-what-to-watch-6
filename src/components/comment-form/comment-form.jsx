import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {postComment} from '../../store/api-actions';
import {moviePropTypes} from '../../props-validation';
import {getCommentStatus} from '../../store/activeMovie/selectors';
import ErrorScreen from '../error-screen/error-screen';

const CommentForm = ({onSubmit, movie, commentStatus}) => {
  const history = useHistory();

  if (commentStatus === `SENT`) {
    history.push(`/films/${movie.id}`);
  }

  const [userStar, setUserStar] = useState(0);
  const [commentText, setCommentText] = useState(``);
  const [disabledButton, setDisabledButton] = useState(true);

  const STARS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const MIN_LENGTH = 50;
  const MAX_LENGTH = 400;

  const radioRef = useRef();
  const textAreaRef = useRef();

  useEffect(() => {
    radioRef.current.value = userStar;
    textAreaRef.current.value = commentText;
    return () => {
      radioRef.current.value = null;
      textAreaRef.current.value = null;
    };
  }, [userStar, commentText]);

  useEffect(() => {
    if (commentText.length >= 50 && commentText.length < 400 && userStar > 0) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [commentText, userStar]);


  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({
      movieId: movie.id,
      rating: userStar,
      comment: commentText,
    });
  };

  return (
    commentStatus === `ERROR` ? <ErrorScreen /> :
      <form action="#" className="add-review__form"
        onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {STARS.map((star, id) => {
              return (
                <React.Fragment key={`${id}-star${star}`}>
                  <input
                    disabled={commentStatus === `SENDING`}
                    ref={radioRef}
                    className="rating__input"
                    id={`star-${id}`}
                    type="radio"
                    name="rating"
                    value={id + 1}
                    data-testid="stars"
                    onChange={({target}) => {
                      return (
                        setUserStar(+target.value)
                      );
                    }}
                  />
                  <label className="rating__label" htmlFor={`star-${id}`}>Rating {id}</label>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            disabled={commentStatus === `SENDING`}
            ref={textAreaRef}
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            value={commentText}
            minLength={MIN_LENGTH}
            maxLength={MAX_LENGTH}
            data-testid="comment"
            onChange={({target}) => {
              const value = target.value;
              return (
                setCommentText(value)
              );
            }}
          ></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={commentStatus === `SENDING` ? true : disabledButton}>Post</button>
          </div>

        </div>
      </form>
  );
};

CommentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  movie: PropTypes.shape(moviePropTypes).isRequired,
  commentStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  commentStatus: getCommentStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(commentData) {
    dispatch(postComment(commentData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
