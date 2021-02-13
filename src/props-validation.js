import PropTypes from 'prop-types';

export const moviePropTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  previewImg: PropTypes.string.isRequired,
};
