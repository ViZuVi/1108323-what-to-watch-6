
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './components/app/app';
import {reviews} from './adapters/reviews';
import {reducer} from './store/reducer';
import {createAPI} from './services/api';
import {ActionCreator} from './store/action';
import {AuthorizationStatus} from './const';
import {checkAuth} from './store/api-actions';
import {fetchMovies} from './store/api-actions';

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

store.dispatch(checkAuth());
store.dispatch(fetchMovies());

const promoMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014,
};

ReactDOM.render(
    <Provider store={store} >
      <App promoMovie={promoMovie} reviews={reviews} />
    </Provider>,
    document.querySelector(`#root`)
);
