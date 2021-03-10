
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './components/app/app';
import rootReducer from './store/root-reducer';
import {createAPI} from './services/api';
import {requiredAuthorization} from './store/action';
import {AuthorizationStatus} from './const';
import {checkAuth, fetchMovies, fetchPromoMovie} from './store/api-actions';

const api = createAPI(
    () => store.dispatch(requiredAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

store.dispatch(checkAuth());
store.dispatch(fetchMovies());
store.dispatch(fetchPromoMovie());

ReactDOM.render(
    <Provider store={store} >
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
