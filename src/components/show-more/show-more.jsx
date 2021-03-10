import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getShownMovies} from '../../store/action';

const ShowMore = ({onShowMoreClick}) => {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onShowMoreClick}>Show more</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onShowMoreClick() {
    dispatch(getShownMovies());
  }
});

ShowMore.propTypes = {
  onShowMoreClick: PropTypes.func.isRequired,
};

export {ShowMore};
export default connect(null, mapDispatchToProps)(ShowMore);
