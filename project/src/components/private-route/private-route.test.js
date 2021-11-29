import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { AuthorizationStatus} from '../../const';
import PrivateRoute from './private-route';

const mockStore = configureStore({});
let history;

describe('Component: PrivateRoute', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push('/private');
  });

  it('should render component for public route, when user not authorized', () => {
    const store = mockStore({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Route exact path="/login"><h1>Public Route</h1></Route>
          <PrivateRoute
            exact
            path="/private"
            render={() => <h1>Private Route</h1>}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Public Route')).toBeInTheDocument();
    expect(screen.queryByText('Private Route')).not.toBeInTheDocument();
  });

  it('should render component for private route, when user authorized', () => {
    const store = mockStore({
      authorizationStatus: AuthorizationStatus.AUTH,
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Route exact path="/login"><h1>Public Route</h1></Route>
          <PrivateRoute
            exact
            path="/private"
            render={() => <h1>Private Route</h1>}
          />
        </Router>
      </Provider>,
    );
    expect(screen.getByText('Private Route')).toBeInTheDocument();
    expect(screen.queryByText('Public Route')).not.toBeInTheDocument();
  });
});
