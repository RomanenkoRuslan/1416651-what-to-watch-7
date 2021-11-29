import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FilmCard from './film-card';

describe('Component: FilmCard', () => {
  it('should render correctly', () => {
    const fakeProp = {
      name: 'Title film',
      previewImage: 'https://8.react.pages.academy/static/film/preview/A_Star_Is_Born.jpg',
      previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
      id: 1,
      video: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
    };
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <FilmCard film={fakeProp}/>
      </Router>,
    );

    const filmName = getByText(fakeProp.name);

    expect(filmName).toBeInTheDocument();
  });
});
