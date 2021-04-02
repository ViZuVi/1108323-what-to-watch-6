import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import SignIn from './sign-in';

const mockStore = configureStore({});

it(`SignIn should render correctly`, () => {
  const history = createMemoryHistory();
  const store = mockStore({});
  const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <SignIn />
        </Router>
      </Provider>
  );

  expect(container).toMatchSnapshot();
});
