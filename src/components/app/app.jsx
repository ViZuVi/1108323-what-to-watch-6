import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

const App = ({promoMovie}) => {
  return (
    <>
      <Main promoMovie={promoMovie}/>
    </>
  );
};

App.propTypes = {
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
  }).isRequired,
};

export default App;
