import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import GenresList from './genres-list';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {GENRES} from '../../store/reducer';

const mockStore = configureStore({genre: GENRES.ALLGENRES});

describe('Component: GenresList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Provider store={mockStore({genre: GENRES.ALLGENRES})}>
        <Router history={history}>
          <GenresList genre={GENRES.ALLGENRES} onChangeGenre={() => {}}/>
        </Router>
      </Provider>,
    );

    const genre = getByText('All genres');

    expect(genre).toBeInTheDocument();
  });
});
