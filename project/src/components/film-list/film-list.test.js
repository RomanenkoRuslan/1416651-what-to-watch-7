import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FilmList from './film-list.jsx';

describe('Component: FilmList', () => {
  it('should render correctly, when films < 8 (MINIMUM_RENDERED), shouldn`t render "button-more"', () => {
    const fakeProp = [
      {
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
        runTime: 546,
      },
      {
        name: 'Iron man',
        previewImage: 'https://8.react.pages.academy/static/film/preview/A_Star_Is_Born.jpg',
        previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
        id: 2,
        videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
        genre: 'Drama',
        released: 2018,
        rating: 8.1,
        director: 'Bryan Singer',
        starring: ['Rami Malek', 'Lucy Boynton', 'Gwilym Lee'],
        description: 'Bohemian Rhapsody is a foot-stomping celebration of Queen.',
        runTime: '02-03-2017',
      },
    ];

    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <FilmList films={fakeProp} isButton/>
      </Router>,
    );

    const filmTitle = getByText(fakeProp[0].name);

    expect(filmTitle).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('should render correctly, when films > 8 (MINIMUM_RENDERED), should render "button-more"', () => {
    const fakeProp = [
      {
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
        runTime: 234,
      },
      {
        name: 'Iron man',
        previewImage: 'https://8.react.pages.academy/static/film/preview/A_Star_Is_Born.jpg',
        previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
        id: 2,
        videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
        genre: 'Comedy',
        released: 2018,
        rating: 8.1,
        director: 'Bryan Singer',
        starring: ['Rami Malek', 'Lucy Boynton', 'Gwilym Lee'],
        description: 'Bohemian Rhapsody is a foot-stomping celebration of Queen.',
        runTime: 324,
      },
      {
        name: 'Spider man',
        previewImage: 'https://8.react.pages.academy/static/film/preview/A_Star_Is_Born.jpg',
        previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
        id: 3,
        videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
        genre: 'Drama',
        released: 2007,
        rating: 6.1,
        director: 'Bryan Singer',
        starring: ['Rami Malek', 'Lucy Boynton', 'Gwilym Lee'],
        description: 'Bohemian Rhapsody is a foot-stomping celebration of Queen.',
        runTime: 324,
      },
      {
        name: 'Green man',
        previewImage: 'https://8.react.pages.academy/static/film/preview/A_Star_Is_Born.jpg',
        previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
        id: 4,
        videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
        genre: 'Drama',
        released: 2021,
        rating: 8.9,
        director: 'Bryan Singer',
        starring: ['Rami Malek', 'Lucy Boynton', 'Gwilym Lee'],
        description: 'Bohemian Rhapsody is a foot-stomping celebration of Queen.',
        runTime: 648,
      },
      {
        name: 'Iron man 2',
        previewImage: 'https://8.react.pages.academy/static/film/preview/A_Star_Is_Born.jpg',
        previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
        id: 5,
        videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
        genre: 'Comedy',
        released: 2018,
        rating: 6.1,
        director: 'Bryan Singer',
        starring: ['Rami Malek', 'Lucy Boynton', 'Gwilym Lee'],
        description: 'Bohemian Rhapsody is a foot-stomping celebration of Queen.',
        runTime: 9478,
      },
      {
        name: 'Forest',
        previewImage: 'https://8.react.pages.academy/static/film/preview/A_Star_Is_Born.jpg',
        previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
        id: 6,
        videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
        genre: 'Comedy',
        released: 2008,
        rating: 9.5,
        director: 'Bryan Singer',
        starring: ['Rami Malek', 'Lucy Boynton', 'Gwilym Lee'],
        description: 'Bohemian Rhapsody is a foot-stomping celebration of Queen.',
        runTime: 4687,
      },
      {
        name: 'It',
        previewImage: 'https://8.react.pages.academy/static/film/preview/A_Star_Is_Born.jpg',
        previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
        id: 7,
        videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
        genre: 'Comedy',
        released: 1995,
        rating: 9.9,
        director: 'Bryan Singer',
        starring: ['Rami Malek', 'Lucy Boynton', 'Gwilym Lee'],
        description: 'Bohemian Rhapsody is a foot-stomping celebration of Queen.',
        runTime: 96487,
      },
      {
        name: 'Beach',
        previewImage: 'https://8.react.pages.academy/static/film/preview/A_Star_Is_Born.jpg',
        previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
        id: 8,
        videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
        genre: 'Comedy',
        released: 2018,
        rating: 4.5,
        director: 'Bryan Singer',
        starring: ['Rami Malek', 'Lucy Boynton', 'Gwilym Lee'],
        description: 'Bohemian Rhapsody is a foot-stomping celebration of Queen.',
        runTime: 25,
      },
      {
        name: 'Matrix',
        previewImage: 'https://8.react.pages.academy/static/film/preview/A_Star_Is_Born.jpg',
        previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
        id: 9,
        videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
        genre: 'Comedy',
        released: 2002,
        rating: 9.7,
        director: 'Bryan Singer',
        starring: ['Rami Malek', 'Lucy Boynton', 'Gwilym Lee'],
        description: 'Bohemian Rhapsody is a foot-stomping celebration of Queen.',
        runTime: 79468,
      },
    ];

    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <FilmList films={fakeProp} isButton/>
      </Router>,
    );

    const filmTitle = getByText(fakeProp[0].name);

    expect(filmTitle).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
