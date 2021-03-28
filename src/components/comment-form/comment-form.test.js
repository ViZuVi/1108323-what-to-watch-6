import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import CommentForm from './comment-form';

const mockStore = configureStore({});

it(`Render 'CommentForm' when user navigate to '/films/:id/review' url`, () => {
  const history = createMemoryHistory();
  history.push(`/films/2/review`);
  const store = mockStore({
    ACTIVE_MOVIE: {commentStatus: `PENDING`}
  });
  render(
      <Provider store={store}>
        <Router history={history}>
          <CommentForm movie={{}} />
        </Router>
      </Provider>
  );

  expect(screen.getByLabelText(/Rating 8/i)).toBeInTheDocument();

  userEvent.type(screen.getAllByTestId(`stars`), 8);
  userEvent.type(screen.getByTestId(`comment`), `test comment`);

  expect(screen.getByDisplayValue(8)).toBeInTheDocument();
  expect(screen.getByDisplayValue(/test comment/i)).toBeInTheDocument();
});
