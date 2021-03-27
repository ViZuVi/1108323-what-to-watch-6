import React from 'react';
import PropTypes from 'prop-types';

const ErrorScreen = () => {
  return (
    <div>
      <p style={{textTransform: `uppercase`, fontSize: `32px`, textAlign: `center`, color: `black`}}>{`Error`}</p>
      <p style={{fontSize: `24px`, textAlign: `center`, color: `black`}}>Try again later</p>
    </div>
  );
};

ErrorScreen.propTypes = {
  error: PropTypes.string.isRequired,
};


export default ErrorScreen;
