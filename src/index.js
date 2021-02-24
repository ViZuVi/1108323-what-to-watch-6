
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {films} from './mocks/films';
import {reviews} from './mocks/reviews';
import {reducer} from './store/reducer';

const store = createStore(reducer, composeWithDevTools());

const promoMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014,
};

ReactDOM.render(
    <Provider store={store} >
      <App promoMovie={promoMovie} films={films} reviews={reviews} />
    </Provider>,
    document.querySelector(`#root`)
);
