import React from 'react';
import PropTypes from 'prop-types';

const ErrorScreen = ({error}) => {
  return (
    <div>
      <p className="page-title user-page__title">{`Error. ${error}`}</p>
    </div>
  );
};

ErrorScreen.propTypes = {
  error: PropTypes.string.isRequired,
};


export default ErrorScreen;
