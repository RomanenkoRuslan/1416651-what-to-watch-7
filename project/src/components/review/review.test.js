import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Review from './review';

describe('Component: Review', () => {
  it('should render correctly', () => {
    const fakeProp = {
      rating: 2.5,
      date: '2021-10-24T14:35:14.031Z',
      id: 1,
      comment: 'Bohemian Rhapsody is a foot-stomping celebration of Queen.',
      user: {
        id: 27,
        name: 'Corey',
      },
    };

    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <Review comment={fakeProp}/>
      </Router>,
    );

    const comment = getByText(fakeProp.comment);
    const user = getByText(fakeProp.user.name);
    const rating = getByText(fakeProp.rating);

    expect(comment).toBeInTheDocument();
    expect(user).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
  });
});
