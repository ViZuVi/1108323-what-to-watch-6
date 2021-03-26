import React from 'react';
import {render} from '@testing-library/react';
import Videoplayer from './videoplayer';

describe(`Test Videoplayer`, () => {
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};
  });

  it(`Videoplayer should be render correctly`, () => {
    const mockPath = `mock-path`;
    const {container} = render(
        <Videoplayer
          isPlaying={true}
          src={mockPath}
        />
    );

    expect(container.querySelector(`video`)).toBeInTheDocument();
  });
});
