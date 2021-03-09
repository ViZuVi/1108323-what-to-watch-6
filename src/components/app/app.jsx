import React from 'react';
import PropTypes from 'prop-types';
import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MoviePage from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
// import Player from '../player/player';
import NotFound from '../not-found/not-found';
import {moviePropTypes, reviewPropTypes} from '../../props-validation';
import {AppRoute} from '../../const';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';

const App = ({movies, authorizationStatus}) => {

  const findActiveMovie = (films, props) => {
    const activeMovie = films.find((el) => {
      return el.id === parseInt(props.match.params.id, 10);
    });
    return activeMovie;
  };

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}><Main /></Route>
        <Route exact path={AppRoute.LOGIN}><SignIn /></Route>
        <PrivateRoute exact path={AppRoute.MY_LIST} render={() => (<MyList />)} />
        <PrivateRoute exact path={AppRoute.ADD_REVIEW} render={(props) => (<AddReview movie={findActiveMovie(movies, props)} />)} />
        <Route exact path={AppRoute.MOVIE_PAGE} render={(props) => {
          const activeMovie = findActiveMovie(movies, props);
          return (
            <MoviePage
              {...props}
              // films={films}
              movie={activeMovie}
              authorizationStatus={authorizationStatus}
            />
          );
        }} />
        {/* <Route exact path="/films/1/review"><AddReview movie={films[0]} /></Route>
        <Route exact path="/player/1"><Player movie={films[0]} /></Route> */}
        <Route path="/"><NotFound /></Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  isDataLoaded: state.isDataLoaded,
  authorizationStatus: state.authorizationStatus,
});

App.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape(moviePropTypes).isRequired,
  ).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }),
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewPropTypes).isRequired,
  ),
  authorizationStatus: PropTypes.string.isRequired,
};

export {App};
export default connect(mapStateToProps, null)(App);
