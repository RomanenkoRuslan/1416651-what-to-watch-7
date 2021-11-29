import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FilmOverview from './film-overview';

describe('Component: FilmOverview', () => {
  it('should render correctly', () => {
    const fakeProp = {
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
      runTime: 546,
      scoresCount: 543543,
    };

    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <FilmOverview film={fakeProp}/>
      </Router>,
    );

    const rating = getByText(fakeProp.rating);
    const count = getByText(/543543/i);
    const description = getByText(fakeProp.description);
    const director = getByText(/Bryan Singer/i);

    expect(rating).toBeInTheDocument();
    expect(count).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(director).toBeInTheDocument();
  });
});
