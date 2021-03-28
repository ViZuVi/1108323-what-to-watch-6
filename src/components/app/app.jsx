import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MoviePage from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFound from '../not-found/not-found';
import {AppRoute} from '../../const';
import PrivateRoute from '../private-route/private-route';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {AuthorizationStatus} from '../../const';

const App = ({authorizationStatus}) => {


  return (
    <Switch>
      <Route exact path={AppRoute.ROOT}><Main /></Route>
      <Route exact path={AppRoute.LOGIN} render={() => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? <Redirect to={AppRoute.ROOT} />
            : <SignIn />
        );
      }}
      />
      <Route exact path={AppRoute.MY_LIST}><MyList /></Route>
      <PrivateRoute exact path={AppRoute.ADD_REVIEW} render={() => <AddReview /> } />
      <Route exact path={AppRoute.MOVIE_PAGE}><MoviePage /></Route>
      <Route exact path={AppRoute.VIDEO_PLAYER} ><Player /></Route>
      <Route path="/"><NotFound /></Route>
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(App);
