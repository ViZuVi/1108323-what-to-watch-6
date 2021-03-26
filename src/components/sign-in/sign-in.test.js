import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import {SignIn} from './sign-in';

const mockStore = configureStore({});

it(`Render 'SignIn' when user navigate to '/login' url`, () => {
  const history = createMemoryHistory();
  history.push(`/login`);

  render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <SignIn onSubmit={() => {}} />
        </Router>
      </Provider>
  );

  expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

  userEvent.type(screen.getByTestId(`login`), `test`);
  userEvent.type(screen.getByTestId(`password`), `password1`);

  expect(screen.getByDisplayValue(/test/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(/password1/i)).toBeInTheDocument();
});
