import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {postComment} from '../../store/api-actions';
import {moviePropTypes} from '../../props-validation';

const CommentForm = ({onSubmit, movie}) => {
  const [userStar, setUserStar] = useState(0);
  const [commentText, setCommentText] = useState(``);
  const STARS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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

  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      movieId: movie.id,
      rating: userStar,
      comment: commentText,
    });

    history.push(`/films/${movie.id}`);

  };

  return (
    <form action="#" className="add-review__form"
      onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {STARS.map((star, id) => {
            return (
              <React.Fragment key={`${id}-star${star}`}>
                <input
                  ref={radioRef}
                  className="rating__input"
                  id={`star-${id}`}
                  type="radio"
                  name="rating"
                  value={id + 1}
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
          ref={textAreaRef}
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          value={commentText}
          onChange={({target}) => {
            const value = target.value;
            return (
              setCommentText(value)
            );
          }}
        ></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
};

CommentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  movie: PropTypes.shape(moviePropTypes).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(commentData) {
    dispatch(postComment(commentData));
  }
});

export {CommentForm};
export default connect(null, mapDispatchToProps)(CommentForm);
