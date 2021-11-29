import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FilmCardNavigation from './film-card-navigation.jsx';

describe('Component: FilmCardNavigation', () => {
  it('should render correctly navigationType', () => {
    const navigationTypeList = {
      OVERVIEW: 'Overview',
      DETAILS: 'Details',
      REVIEWS: 'Reviews',
    };

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
      scoresCount: 8647,
    };

    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <FilmCardNavigation film={fakeProp}/>
      </Router>,
    );

    const typeOverview = getByText(navigationTypeList.OVERVIEW);
    const typeDetails = getByText(navigationTypeList.DETAILS);
    const typeReviews = getByText(navigationTypeList.REVIEWS);

    expect(typeOverview).toBeInTheDocument();
    expect(typeDetails).toBeInTheDocument();
    expect(typeReviews).toBeInTheDocument();
  });
});
