import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { AuthorizationStatus, AppRoute} from '../../const';
import {GENRES} from '../../store/reducer';
import App from './app';

let history = null;
let store = null;
let fakeApp = null;
const createFakeStore = configureStore({});

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render "LoadingScreen" when user navigate to "/" and data is not load', () => {
    store = createFakeStore({
      genre: GENRES.ALLGENRES,
      films: [],
      promoFilm: {},
      similarFilm: [],
      favoriteFilms: [],
      comments: [],
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      isDataLoaded: false,
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
    history.push(AppRoute.MAIN);
    render(fakeApp);

    expect(screen.getByText('Welcome! Loading...')).toBeInTheDocument();
  });

  it('should render "Main" when user navigate to "/" and data is LOAD but NOAUTH', () => {
    store = createFakeStore({
      genre: GENRES.ALLGENRES,
      films: [],
      promoFilm: {
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
        runTime: 7546,
      },
      similarFilm: [],
      favoriteFilms: [],
      comments: [],
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      isDataLoaded: true,
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
    history.push(AppRoute.MAIN);
    render(fakeApp);

    const promoTitle = screen.getByText('Title film');
    const signIn = screen.getByText('Sign in');
    const promoYear = screen.getByText(/2018/i);
    const genresList = screen.getByText(/All genres/i);
    const copyright= screen.getByText('© 2019 What to watch Ltd.');

    expect(promoTitle).toBeInTheDocument();
    expect(signIn).toBeInTheDocument();
    expect(promoYear).toBeInTheDocument();
    expect(genresList).toBeInTheDocument();
    expect(copyright).toBeInTheDocument();
  });

  it('should render "Login" when user navigate to "AppRoute.LOGIN"', () => {
    store = createFakeStore({
      genre: GENRES.ALLGENRES,
      films: [],
      promoFilm: {},
      similarFilm: [],
      favoriteFilms: [],
      comments: [],
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      isDataLoaded: true,
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
    history.push(AppRoute.LOGIN);
    render(fakeApp);

    const buttonSignIn = screen.getByRole('button');
    expect(buttonSignIn).toBeInTheDocument();

    const emailInput = screen.getByPlaceholderText('Email address');
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByPlaceholderText('Password');
    expect(passwordInput).toBeInTheDocument();

  });

  it('should render "My List" when user navigate to "AppRoute.MYLIST', () => {
    store = createFakeStore({
      genre: GENRES.ALLGENRES,
      films: [],
      promoFilm: {},
      similarFilm: [],
      favoriteFilms: [],
      comments: [],
      authorizationStatus: AuthorizationStatus.AUTH,
      isDataLoaded: true,
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
    history.push(AppRoute.MYLIST);
    render(fakeApp);

    const titlePage = screen.getByText(/My list/i);
    expect(titlePage).toBeInTheDocument();
  });

  it('should render "Add-review" when user navigate to "AppRoute.ADDREVIEW', () => {
    store = createFakeStore({
      genre: GENRES.ALLGENRES,
      films: [{
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
        runTime: 4565,
      }],
      promoFilm: {},
      similarFilm: [],
      favoriteFilms: [],
      comments: [],
      authorizationStatus: AuthorizationStatus.AUTH,
      isDataLoaded: true,
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
    history.push('/films/1/add-review');
    render(fakeApp);

    const buttonPost = screen.getByText(/Post/i);
    expect(buttonPost).toBeInTheDocument();

    const titleFilm = screen.getByText(/Title film/i);
    expect(titleFilm).toBeInTheDocument();
  });

  it('should render "Player" when user navigate to "AppRoute.PLAYER', () => {
    store = createFakeStore({
      genre: GENRES.ALLGENRES,
      films: [{
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
        runTime: 3264,
      }],
      promoFilm: {},
      similarFilm: [],
      favoriteFilms: [],
      comments: [],
      authorizationStatus: AuthorizationStatus.AUTH,
      isDataLoaded: true,
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
    history.push('/player/1');
    render(fakeApp);

    const titleFilm = screen.getByText(/Title film/i);
    expect(titleFilm).toBeInTheDocument();

    const exitButton = screen.getByText('Exit');
    expect(exitButton).toBeInTheDocument();
  });

  it('should render "error-screen" when user navigate to not exist route "/football"', () => {
    store = createFakeStore({
      genre: GENRES.ALLGENRES,
      films: [],
      promoFilm: {},
      similarFilm: [],
      favoriteFilms: [],
      comments: [],
      authorizationStatus: AuthorizationStatus.AUTH,
      isDataLoaded: true,
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
    history.push('/football');
    render(fakeApp);

    const titleError= screen.getByText(/404 Not Found/i);
    expect(titleError).toBeInTheDocument();

    const linkToMain = screen.getByText('Go back to the main page');
    expect(linkToMain).toBeInTheDocument();
  });
});
