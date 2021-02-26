import React, {useState} from 'react';

const CommentForm = () => {
  const [userStar, setUserStar] = useState(0);
  const [commentText, setCommentText] = useState(``);
  const STARS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {STARS.map((star, id) => {
            return (
              <React.Fragment key={`${id}-star${star}`}>
                <input
                  className="rating__input"
                  id={`star-${id}`}
                  type="radio"
                  name="rating"
                  value={userStar}
                  onChange={({target}) => {
                    const value = ++target.value;
                    return (
                      setUserStar(value)
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

export default CommentForm;
