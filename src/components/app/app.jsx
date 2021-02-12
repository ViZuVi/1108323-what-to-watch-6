import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MoviePage from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFound from '../not-found/not-found';
import {moviePropTypes} from '../../props-validation';

const App = ({promoMovie, films}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Main promoMovie={promoMovie} films={films} /></Route>
        <Route exact path="/login"><SignIn /></Route>
        <Route exact path="/mylist"><MyList films={films} /></Route>
        <Route exact path="/films/:id" render={(props) => {
          const activeMovie = films.find((el) => {
            return el.id === parseInt(props.match.params.id, 10);
          });
          return (
            <MoviePage
              {...props}
              films={films}
              movie={activeMovie}
            />
          );
        }} />
        <Route exact path="/films/1/review"><AddReview movie={films[0]} /></Route>
        <Route exact path="/player/1"><Player movie={films[0]} /></Route>
        <Route path="/"><NotFound /></Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
  }).isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape(moviePropTypes).isRequired,
  ).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }),
};

export default App;
