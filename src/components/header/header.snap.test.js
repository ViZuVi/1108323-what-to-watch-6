import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import Header from './header';
import {userInfo} from '../../test-mocks';
import {AuthorizationStatus} from '../../const';

const mockStore = configureStore({});

it(`Header should render correctly`, () => {
  const history = createMemoryHistory();
  const store = mockStore({
    USER: {authorizationStatus: AuthorizationStatus.AUTH, userInfo}
  });
  const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>
  );

  expect(container).toMatchSnapshot();
});
