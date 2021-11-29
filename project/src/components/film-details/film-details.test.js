import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FilmDetails from './film-details.jsx';

describe('Component: FilmDetails', () => {
  it('should render correctly', () => {
    const fakeProp = {
      name: 'Title film',
      previewImage: 'https://8.react.pages.academy/static/film/preview/A_Star_Is_Born.jpg',
      previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
      id: 1,
      videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
      genre: 'Drama',
      released: 2018,
      rating: 8.1,
      director: 'Bryan Singer',
      starring: ['Rami Malek', 'Lucy Boynton', 'Gwilym Lee'],
      description: 'Bohemian Rhapsody is a foot-stomping celebration of Queen.',
      runTime: 4536,
    };

    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <FilmDetails film={fakeProp}/>
      </Router>,
    );

    const director = getByText(fakeProp.director);
    const genre = getByText(fakeProp.genre);
    const released = getByText(fakeProp.released);

    expect(director).toBeInTheDocument();
    expect(genre).toBeInTheDocument();
    expect(released).toBeInTheDocument();
  });
});
