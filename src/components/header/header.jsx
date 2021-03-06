import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';

const Header = ({authorizationStatus, userInfo}) => {
  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <div className="user-block">

        {authorizationStatus === AuthorizationStatus.AUTH
          ? <Link to={AppRoute.MY_LIST}>{userInfo.email}</Link>
          : <Link to={AppRoute.LOGIN}>Sign In</Link>}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  userInfo: state.userInfo,
});

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  userInfo: PropTypes.shape({
    email: PropTypes.string.isRequired
  })
};

export {Header};
export default connect(mapStateToProps, null)(Header);
