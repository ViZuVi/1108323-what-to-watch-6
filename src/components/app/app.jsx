import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MoviePage from '../film/movie-page';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFound from '../not-found/not-found';

const App = ({promoMovie}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Main promoMovie={promoMovie}/></Route>
        <Route exact path="/login"><SignIn /></Route>
        <Route exact path="/mylist"><MyList /></Route>
        <Route exact path="/films/1"><MoviePage /></Route>
        <Route exact path="/films/1/review"><AddReview /></Route>
        <Route exact path="/player/1"><Player /></Route>
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
};

export default App;
