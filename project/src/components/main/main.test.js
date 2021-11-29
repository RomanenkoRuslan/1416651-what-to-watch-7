import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import {AuthorizationStatus} from '../../const';
import {GENRES} from '../../store/reducer';
import Main from './main';

const mockStore = configureStore({});

describe('Component: Main', () => {
  it('should render correctly when user NOAUTH', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      genre: GENRES.ALLGENRES,
      films: [],
      promoFilm: {
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
        runTime: 456,
      },
      similarFilm: [],
      favoriteFilms: [],
      comments: [],
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      isDataLoaded: true,
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <Main />
        </Router>
      </Provider>,
    );

    const promoTitle = screen.getByText('Title film');
    const signIn = screen.getByText('Sign in');
    const signOut = screen.queryByText('Sign out');
    const buttonPlay = screen.getByText('Play');
    const buttonAddMyLsit = screen.queryByText('My list');
    const promoYear = screen.getByText(/2018/i);
    const genresList = screen.getByText(/All genres/i);
    const copyright= screen.getByText('© 2019 What to watch Ltd.');

    expect(promoTitle).toBeInTheDocument();
    expect(signIn).toBeInTheDocument();
    expect(buttonPlay).toBeInTheDocument();
    expect(promoYear).toBeInTheDocument();
    expect(genresList).toBeInTheDocument();
    expect(copyright).toBeInTheDocument();

    expect(signOut).not.toBeInTheDocument();
    expect(buttonAddMyLsit).not.toBeInTheDocument();
  });

  it('should render correctly when user AUTH', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      genre: GENRES.ALLGENRES,
      films: [],
      promoFilm: {
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
        runTime: 456,
      },
      similarFilm: [],
      favoriteFilms: [],
      comments: [],
      authorizationStatus: AuthorizationStatus.AUTH,
      isDataLoaded: true,
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <Main />
        </Router>
      </Provider>,
    );

    const promoTitle = screen.getByText('Title film');
    const signIn = screen.queryByText('Sign in');
    const signOut = screen.getByText('Sign out');
    const buttonPlay = screen.getByText('Play');
    const buttonAddMyLsit = screen.queryByText('My list');
    const promoYear = screen.getByText(/2018/i);
    const genresList = screen.getByText(/All genres/i);
    const copyright= screen.getByText('© 2019 What to watch Ltd.');

    expect(promoTitle).toBeInTheDocument();
    expect(signOut).toBeInTheDocument();
    expect(buttonPlay).toBeInTheDocument();
    expect(promoYear).toBeInTheDocument();
    expect(genresList).toBeInTheDocument();
    expect(copyright).toBeInTheDocument();

    expect(signIn).not.toBeInTheDocument();
    expect(buttonAddMyLsit).toBeInTheDocument();
  });

  it('should render correctly when GENRE is not default (ALLGENRES)', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      genre: GENRES.COMEDY,
      films: [{
        name: 'Title Comedy Film',
        previewImage: 'https://8.react.pages.academy/static/film/preview/A_Star_Is_Born.jpg',
        previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
        id: 2,
        videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
        genre: 'Comedy',
        released: 2019,
        rating: 6.1,
        director: 'Bryan Singer',
        starring: ['Rami Malek', 'Lucy Boynton', 'Gwilym Lee'],
        description: 'Bohemian Rhapsody is a foot-stomping celebration of Queen.',
        runTime: 456,
      }],
      promoFilm: {
        name: 'Title Film',
        previewImage: 'https://8.react.pages.academy/static/film/preview/A_Star_Is_Born.jpg',
        previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
        id: 1,
        videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
        genre: 'Comedy',
        released: 2018,
        rating: 8.1,
        director: 'Bryan Singer',
        starring: ['Rami Malek', 'Lucy Boynton', 'Gwilym Lee'],
        description: 'Bohemian Rhapsody is a foot-stomping celebration of Queen.',
        runTime: '02-03-2017',
      },
      similarFilm: [],
      favoriteFilms: [],
      comments: [],
      authorizationStatus: AuthorizationStatus.AUTH,
      isDataLoaded: true,
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <Main />
        </Router>
      </Provider>,
    );

    const comedyTitle = screen.getByText('Title Comedy Film');
    const signIn = screen.queryByText('Sign in');
    const signOut = screen.getByText('Sign out');
    const buttonPlay = screen.getByText('Play');
    const buttonAddMyLsit = screen.queryByText('My list');
    const promoYear = screen.getByText(/2018/i);
    const genresList = screen.getByText(/All genres/i);
    const copyright= screen.getByText('© 2019 What to watch Ltd.');

    expect(comedyTitle).toBeInTheDocument();
    expect(signOut).toBeInTheDocument();
    expect(buttonPlay).toBeInTheDocument();
    expect(promoYear).toBeInTheDocument();
    expect(genresList).toBeInTheDocument();
    expect(copyright).toBeInTheDocument();

    expect(signIn).not.toBeInTheDocument();
    expect(buttonAddMyLsit).toBeInTheDocument();

    expect(screen.getAllByRole('article').length).toBe(1);
  });

  it('should render correctly when GENRE is empty, should empty list', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      genre: GENRES.COMEDY,
      films: [{
        name: 'Title Comedy Film',
        previewImage: 'https://8.react.pages.academy/static/film/preview/A_Star_Is_Born.jpg',
        previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
        id: 2,
        videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
        genre: 'Drama',
        released: 2019,
        rating: 6.1,
        director: 'Bryan Singer',
        starring: ['Rami Malek', 'Lucy Boynton', 'Gwilym Lee'],
        description: 'Bohemian Rhapsody is a foot-stomping celebration of Queen.',
        runTime: '02-03-2017',
      }],
      promoFilm: {
        name: 'Title Film',
        previewImage: 'https://8.react.pages.academy/static/film/preview/A_Star_Is_Born.jpg',
        previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
        id: 1,
        videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
        genre: 'Comedy',
        released: 2018,
        rating: 8.1,
        director: 'Bryan Singer',
        starring: ['Rami Malek', 'Lucy Boynton', 'Gwilym Lee'],
        description: 'Bohemian Rhapsody is a foot-stomping celebration of Queen.',
        runTime: '02-03-2017',
      },
      similarFilm: [],
      favoriteFilms: [],
      comments: [],
      authorizationStatus: AuthorizationStatus.AUTH,
      isDataLoaded: true,
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <Main />
        </Router>
      </Provider>,
    );

    const comedyTitle = screen.queryByText('Title Comedy Film');
    const signIn = screen.queryByText('Sign in');
    const signOut = screen.getByText('Sign out');
    const buttonPlay = screen.getByText('Play');
    const buttonAddMyLsit = screen.queryByText('My list');
    const promoYear = screen.getByText(/2018/i);
    const genresList = screen.getByText(/All genres/i);
    const copyright= screen.getByText('© 2019 What to watch Ltd.');

    expect(signOut).toBeInTheDocument();
    expect(buttonPlay).toBeInTheDocument();
    expect(promoYear).toBeInTheDocument();
    expect(genresList).toBeInTheDocument();
    expect(copyright).toBeInTheDocument();

    expect(comedyTitle).not.toBeInTheDocument();
    expect(signIn).not.toBeInTheDocument();
    expect(buttonAddMyLsit).toBeInTheDocument();

    expect(screen.queryAllByRole('article').length).toBe(0);
  });
});
