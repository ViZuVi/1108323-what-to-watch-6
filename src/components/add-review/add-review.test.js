import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import AddReview from './add-review';
import {movie} from '../../test-mocks';

const mockStore = configureStore({});

it(`Render 'AddReview' when user navigate to '/films/:id/review' url`, () => {
  const history = createMemoryHistory();
  history.push(`/films/2/review`);
  const store = mockStore({
    ACTIVE_MOVIE: {movie, commentStatus: `PENDING`}
  });
  render(
      <Provider store={store}>
        <Router history={history}>
          <AddReview />
        </Router>
      </Provider>
  );

  expect(screen.getByText(/Add review/i)).toBeInTheDocument();
});
