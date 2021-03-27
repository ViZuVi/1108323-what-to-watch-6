import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import MovieCard from './movie-card';
import {movie} from '../../test-mocks';

test(`MovieCard should render correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Router history={history}>
        <MovieCard movie={movie} />
      </Router>);
  expect(container).toMatchSnapshot();
});

