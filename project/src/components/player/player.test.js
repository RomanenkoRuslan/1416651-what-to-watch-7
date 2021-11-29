import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {AppRoute} from '../../const';
import Player from './player';

const mockStore = configureStore({});

describe.only('Component: Player', () => {
  beforeAll(() => {
    window.HTMLVideoElement.prototype.play = jest.fn();
    window.HTMLVideoElement.prototype.pause = jest.fn();
  });

  it('should render correctly', () => {
    const history = createMemoryHistory();
    const mockPath = 'mock-path';
    history.push('/player/1');
    const store = mockStore({
      films: [
        {
          name: 'Title film',
          previewImage: 'https://8.react.pages.academy/static/film/preview/A_Star_Is_Born.jpg',
          previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
          id: 1,
          video: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
          genre: 'Drama',
          released: 2018,
          rating: 8.1,
          director: 'Bryan Singer',
          starring: ['Rami Malek', 'Lucy Boynton', 'Gwilym Lee'],
          description: 'Bohemian Rhapsody is a foot-stomping celebration of Queen.',
          runTime: 1200,
        },
      ],
    });
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path={AppRoute.PLAYER}>
              <Player
                src={mockPath}
              />
            </Route>
          </Switch>,
        </Router>
      </Provider>,
    );
    const video = container.querySelector('video');

    expect(container.querySelector('video')).toBeInTheDocument();
    expect(container.querySelector('.player__exit')).toBeInTheDocument();
    expect(container.querySelector('.player__play')).toBeInTheDocument();
    expect(container.querySelector('.player__full-screen')).toBeInTheDocument();

    userEvent.click(container.querySelector('.player__play'));
    expect(video.play).toBeCalled();
  });
});
