import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import MyList from './my-list';

const mockStore = configureStore({});

describe('Component: MyList', () => {
  it('should render correctly when favoriteFilms is empty', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      favoriteFilms: [],
    });
    const {getByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <MyList />
        </Router>
      </Provider>,
    );

    const titleMyList = getByText('My list');
    const errorText = getByText('Your list is empty!!! Add films!');

    expect(titleMyList).toBeInTheDocument();
    expect(errorText).toBeInTheDocument();
  });

  it('should render correctly when exist favoriteFilms', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      favoriteFilms: [{
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
        runTime: 5465,
      }],
    });
    const {getByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <MyList />
        </Router>
      </Provider>,
    );

    const titleMyList = getByText('My list');
    const filmTitle = getByText('Title film');

    expect(titleMyList).toBeInTheDocument();
    expect(filmTitle).toBeInTheDocument();
    expect(screen.getAllByRole('article').length).toBe(1);
  });
});
