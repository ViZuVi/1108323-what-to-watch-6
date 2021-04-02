import React from 'react';
import {render} from '@testing-library/react';
import Videoplayer from './videoplayer';
import {movie} from '../../test-mocks';

it(`Videoplayer should render correctly`, () => {
  const {container} = render(
      <Videoplayer isPlaying={true} src={movie.src} poster={movie.posterImg} />);
  expect(container).toMatchSnapshot();
});

