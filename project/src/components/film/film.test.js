import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import {AuthorizationStatus, AppRoute} from '../../const';
import {GENRES} from '../../store/reducer';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api/api';
import Film from './film';

describe('Component: Film', () => {
  it('should render correctly when user NOAUTH', () => {
    const apiMock = new MockAdapter(createAPI(() => {}));
    const extraThunkArgument = apiMock.axiosInstance;
    const middlewares = [thunk.withExtraArgument(extraThunkArgument)];
    const mockStore = configureStore(middlewares);
    const history = createMemoryHistory();
    const store = mockStore({
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
        runTime: 486,
        scoresCount: 564,
      }],
      promoFilm: {},
      similarFilm: [],
      favoriteFilms: [],
      comments: [],
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      isDataLoaded: true,
    });
    history.push('/films/1');

    apiMock
      .onGet('films/1/similar')
      .reply(200, [{}, {}, {}]);

    render(
      <Provider store={store}>
        <Router history={history}>
          <Route exact path={AppRoute.FILM}>
            <Film />
          </Route>
        </Router>
      </Provider>,
    );

    const promoTitle = screen.getByText('Title film');
    const signIn = screen.getByText('Sign in');
    const signOut = screen.queryByText('Sign out');
    const buttonPlay = screen.getByText('Play');
    const buttonAddMyLsit = screen.queryByText('My list');
    const buttonAddReview = screen.queryByText('Add review');
    const promoYear = screen.getByText(/2018/i);
    const copyright= screen.getByText('© 2019 What to watch Ltd.');

    expect(promoTitle).toBeInTheDocument();
    expect(signIn).toBeInTheDocument();
    expect(buttonPlay).toBeInTheDocument();
    expect(promoYear).toBeInTheDocument();
    expect(copyright).toBeInTheDocument();

    expect(signOut).not.toBeInTheDocument();
    expect(buttonAddMyLsit).not.toBeInTheDocument();
    expect(buttonAddReview).not.toBeInTheDocument();
  });
});
