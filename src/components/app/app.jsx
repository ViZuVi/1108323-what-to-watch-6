import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MoviePage from '../movie-page/movie-page';
// import AddReview from '../add-review/add-review';
// import Player from '../player/player';
import NotFound from '../not-found/not-found';
import {moviePropTypes, reviewPropTypes} from '../../props-validation';
import {AppRoute} from '../../const';

const App = ({promoMovie, filteredMovies, reviews}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}><Main promoMovie={promoMovie} /></Route>
        <Route exact path={AppRoute.LOGIN}><SignIn /></Route>
        <Route exact path={AppRoute.MY_LIST}><MyList /></Route>
        <Route exact path={AppRoute.MOVIE_PAGE} render={(props) => {
          const activeMovie = filteredMovies.find((el) => {
            return el.id === parseInt(props.match.params.id, 10);
          });
          return (
            <MoviePage
              {...props}
              // films={films}
              reviews={reviews}
              movie={activeMovie}
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
  filteredMovies: state.filteredMovies,
  isDataLoaded: state.isDataLoaded,
});

App.propTypes = {
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
  }).isRequired,
  filteredMovies: PropTypes.arrayOf(
      PropTypes.shape(moviePropTypes).isRequired,
  ).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }),
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewPropTypes).isRequired,
  )
};

export {App};
export default connect(mapStateToProps, null)(App);
