import React from 'react';
import {render} from '@testing-library/react';
import Tabs from './tabs';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {movie, comments} from '../../test-mocks';

const mockStore = configureStore({});

it(`Tabs should render correctly`, () => {
  const store = mockStore({
    ACTIVE_MOVIE: {movie, movieStatus: `LOADED`, comments},
  });
  const {container} = render(
      <Provider store={store}>
        <Tabs movie={movie} />
      </Provider>);
  expect(container).toMatchSnapshot();
});

