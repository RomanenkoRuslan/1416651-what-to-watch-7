import React from 'react';
import {render} from '@testing-library/react';
import MiniPlayer from './mini-player';

describe('Component: MiniPlayer', () => {
  beforeAll(() => {
    window.HTMLVideoElement.prototype.play = () => {};
    window.HTMLVideoElement.prototype.pause = () => {};
  });

  it('should render correctly', () => {
    const mockPath = 'mock-path';

    const {container} = render(
      <MiniPlayer
        src={mockPath}
      />,
    );

    expect(container.querySelector('video')).toBeInTheDocument();
  });
});
