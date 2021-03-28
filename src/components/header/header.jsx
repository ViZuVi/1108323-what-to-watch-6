import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';
import {logout} from '../../store/api-actions';
import {getAuthorizationStatus, getUserInfo} from '../../store/user/selectors';

const Header = ({authorizationStatus, userInfo, onLogoutClick}) => {
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
          ? <> <Link to={AppRoute.MY_LIST}>
            <div className="user-block__avatar">
              <img src={userInfo.avatar} alt="User avatar" width="63" height="63" />
            </div>
          </Link>
          <a href="#" onClick={onLogoutClick}>
                  Log out
          </a>
          </>
          : <Link to={AppRoute.LOGIN}>Sign In</Link>}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  userInfo: getUserInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogoutClick() {
    dispatch(logout());
  }
});

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  userInfo: PropTypes.shape({
    avatar: PropTypes.string,
  }),
  onLogoutClick: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
