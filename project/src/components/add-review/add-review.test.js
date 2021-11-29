import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import AddReview from './add-review';
import { AppRoute, AuthorizationStatus } from '../../const';
import userEvent from '@testing-library/user-event';
import {GENRES} from '../../store/reducer';

let history = null;
let store = null;
let fakeApp = null;
const createFakeStore = configureStore({});

describe('Component: AddReview', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render correctly', () => {
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
        runTime: 6565,
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
          <Route path={AppRoute.ADDREVIEW}>
            <AddReview />
          </Route>
        </Router>
      </Provider>
    );
    history.push('/films/1/add-review');
    render(fakeApp);

    const buttonPost = screen.getByText(/Post/i);
    expect(buttonPost).toBeInTheDocument();

    const titleFilm = screen.getByText(/Title film/i);
    expect(titleFilm).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/Review text/i)).toBeInTheDocument();
    userEvent.type(screen.getByTestId('review-area'), 'Good!');
    expect(screen.getByDisplayValue(/Good!/i)).toBeInTheDocument();
  });
});
