import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import ErrorScreen from './error-screen';

describe('Component: ErrorScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <ErrorScreen />
      </Router>,
    );

    const headerElement = getByText('404 Not Found');
    const linkElement = getByText('Go back to the main page');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
