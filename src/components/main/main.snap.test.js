import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import Main from './main';
import {movies, genres, movie} from '../../test-mocks';
import {AuthorizationStatus} from '../../const';

const mockStore = configureStore({});

it(`Main should render correctly`, () => {
  const history = createMemoryHistory();
  const store = mockStore({
    DATA: {filteredMovies: movies, promoMovie: movie, isVisibleShowMore: true, genres},
    USER: {authorizationStatus: AuthorizationStatus.AUTH, userInfo: {}}
  });
  const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <Main onAddToFavoriteBtnClick={jest.fn()} />
        </Router>
      </Provider>
  );
  expect(container).toMatchSnapshot();
});
