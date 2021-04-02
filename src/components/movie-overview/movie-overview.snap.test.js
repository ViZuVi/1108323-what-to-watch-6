import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import MovieOverview from './movie-overview';
import {movie} from '../../test-mocks';

it(`MovieOverview should render correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Router history={history}>
        <MovieOverview movie={movie} />
      </Router>);
  expect(container).toMatchSnapshot();
});

