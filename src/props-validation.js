import PropTypes from 'prop-types';

export const moviePropTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  previewImg: PropTypes.string,
};

export const reviewPropTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
