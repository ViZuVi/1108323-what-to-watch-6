import React from 'react';

const ErrorScreen = ({error}) => {
  return (
    <div>
      <p className="page-title user-page__title">{`Error. ${error}`}</p>
    </div>
  );
};

export default ErrorScreen;
