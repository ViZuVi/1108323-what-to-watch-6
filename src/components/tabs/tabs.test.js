import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import Tabs from './tabs';
import {movie, comments} from '../../test-mocks';

const mockStore = configureStore({});

it(`Tabs should render correctly`, () => {
  const history = createMemoryHistory();
  const store = mockStore({
    ACTIVE_MOVIE: {comments, movie}
  });
  const {getByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <Tabs movie={movie} comments={comments} />
        </Router>
      </Provider>
  );
  const overviewTab = getByText(`Overview`);
  const detailsTab = getByText(`Details`);
  const reviewsTab = getByText(`Reviews`);

  expect(overviewTab).toBeInTheDocument();
  expect(detailsTab).toBeInTheDocument();
  expect(reviewsTab).toBeInTheDocument();
});
