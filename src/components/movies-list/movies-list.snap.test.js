import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import MoviesList from './movies-list';
import {movies} from '../../test-mocks';

it(`MoviesList should render correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Router history={history}>
        <MoviesList movies={movies} />
      </Router>);
  expect(container).toMatchSnapshot();
});

