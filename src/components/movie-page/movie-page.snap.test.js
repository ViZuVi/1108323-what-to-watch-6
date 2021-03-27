import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import MoviePage from './movie-page';
import {movie, movies} from '../../test-mocks';
import {AuthorizationStatus} from '../../const';

const mockStore = configureStore({});

it(`MoviePage should render correctly`, () => {
  const history = createMemoryHistory();
  const store = mockStore({
    ACTIVE_MOVIE: {movie, movieStatus: `LOADED`},
    DATA: {movies},
    USER: {authorizationStatus: AuthorizationStatus.AUTH, userInfo: {}}
  });
  const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <MoviePage />
        </Router>
      </Provider>
  );

  expect(container).toMatchSnapshot();
});
