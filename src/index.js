
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from './mocks/films';
import {reviews} from './mocks/reviews';

const promoMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014,
};

ReactDOM.render(
    <App promoMovie={promoMovie} films={films} reviews={reviews} />,
    document.querySelector(`#root`)
);
