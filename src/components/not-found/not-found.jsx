import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">404. Page not found</h1>
      </header>
      <Link className="catalog__button" style={{textDecoration: `none`}} to="/">Return to the main page</Link>
    </div>
  );
};

export default NotFound;
