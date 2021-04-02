import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import AddReview from './add-review';
import {movie} from '../../test-mocks';

const mockStore = configureStore({});

it(`AddReview should render correctly`, () => {
  const history = createMemoryHistory();
  const store = mockStore({
    ACTIVE_MOVIE: {movie},
  });
  const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <AddReview />
        </Router>
      </Provider>
  );

  expect(container).toMatchSnapshot();
});
