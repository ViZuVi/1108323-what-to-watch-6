import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import MovieReviews from './movie-reviews';
import {comments} from '../../test-mocks';

test(`MovieReviews should render correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Router history={history}>
        <MovieReviews comments={comments} />
      </Router>);
  expect(container).toMatchSnapshot();
});

