import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import MyList from './my-list';
import {movies} from '../../test-mocks';

const mockStore = configureStore({});

it(`MyList should render correctly`, () => {
  const history = createMemoryHistory();
  const store = mockStore({
    DATA: {favoriteFilms: movies}
  });
  const {getByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <MyList />
        </Router>
      </Provider>
  );
  const headerElement = getByText(`My list`);

  expect(headerElement).toBeInTheDocument();
});
