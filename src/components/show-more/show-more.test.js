import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {ShowMore} from './show-more';

const mockStore = configureStore({});

it(`Tabs should render correctly`, () => {
  const history = createMemoryHistory();
  const {getByText} = render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <ShowMore onShowMoreClick={jest.fn()} />
        </Router>
      </Provider>
  );
  const buttonElement = getByText(`Show more`);

  expect(buttonElement).toBeInTheDocument();
});
