import React from 'react';
import {render} from '@testing-library/react';
import ShowMore from './show-more';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore({});

it(`ShowMore should render correctly`, () => {
  const store = mockStore({});
  const {container} = render(
      <Provider store={store}>
        <ShowMore />
      </Provider>);
  expect(container).toMatchSnapshot();
});

