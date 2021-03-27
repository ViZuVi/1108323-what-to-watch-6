import React from 'react';
import {render} from '@testing-library/react';
import MovieDetails from './movie-details';
import {movie} from "../../test-mocks";

it(`MovieDetails should render correctly`, () => {
  const {getByText} = render(<MovieDetails movie={movie} />);

  const directorElement = getByText(`Director`);
  const starringElement = getByText(`Starring`);
  const runTimeElement = getByText(`Run Time`);
  const genreElement = getByText(`Genre`);
  const releasedElement = getByText(`Released`);

  expect(directorElement).toBeInTheDocument();
  expect(starringElement).toBeInTheDocument();
  expect(runTimeElement).toBeInTheDocument();
  expect(genreElement).toBeInTheDocument();
  expect(releasedElement).toBeInTheDocument();
});
