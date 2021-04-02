import React from 'react';
import {render} from '@testing-library/react';
import MovieDetails from './movie-details';
import {movie} from '../../test-mocks';

it(`MovieDetails should render correctly`, () => {
  const {container} = render(
      <MovieDetails movie={movie} />);
  expect(container).toMatchSnapshot();
});

