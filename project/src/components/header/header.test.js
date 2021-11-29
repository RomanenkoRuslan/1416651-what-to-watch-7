import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import Header from './header';
import SignIn from '../sign-in/sign-in';
import {AppRoute} from '../../const';

const mockStore = configureStore({});

describe('Component: Header', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <Header>
            <h1>Test children</h1>
          </Header>
        </Router>
      </Provider>,
    );

    const testChildren = getByText('Test children');
    const status = getByText('Sign in');

    expect(status).toBeInTheDocument();
    expect(testChildren).toBeInTheDocument();
  });

  it('should render correctly when user clicked to link', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <Route exact path={'/'}>
            <Header>
              <h1>Test children</h1>
            </Header>
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <SignIn />
          </Route>
        </Router>
      </Provider>,
    );

    const testChildren = getByText('Test children');
    const status = getByText('Sign in');

    expect(status).toBeInTheDocument();
    expect(testChildren).toBeInTheDocument();

    userEvent.click(screen.getByText(/Sign in/i));
    expect(screen.getByText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });
});
