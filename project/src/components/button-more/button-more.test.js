import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import ButtonMore from './button-more';

describe('Component: ButtonMore', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <ButtonMore onClick={() => {}}/>
      </Router>,
    );

    const buttonElement = getByText('Show more');

    expect(buttonElement).toBeInTheDocument();
  });
});
