
import React from 'react';
import ReactDOM from 'react-dom';
import {Router as BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './components/app/app';
import rootReducer from './store/root-reducer';
import {createAPI} from './services/api';
import {requiredAuthorization} from './store/action';
import {AuthorizationStatus} from './const';
import {checkAuth, fetchFavoriteMovies, fetchMovies, fetchPromoMovie} from './store/api-actions';
import browserHistory from './browser-history';

const api = createAPI(
    () => store.dispatch(requiredAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

store.dispatch(checkAuth());
store.dispatch(fetchMovies());
store.dispatch(fetchPromoMovie());

if (AuthorizationStatus.AUTH) {
  store.dispatch(fetchFavoriteMovies());
}

ReactDOM.render(
    <Provider store={store} >
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#root`)
);
