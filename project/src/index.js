import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import { Router as BrowserRouter } from 'react-router-dom';
import {reducer} from './store/reducer.js';
import {createAPI} from './api/api.js';
import { AuthorizationStatus } from './const.js';
import {checkAuth, fetchFilmList, fetchPromoFilm, fetchFavoriteFilms} from './store/api-actions.js';
import {requireAuthorization} from './store/action.js';
import browserHistory from './browser-history';

const api = createAPI(
  onUnauthorized,
);


export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

function onUnauthorized() {
  store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
}

const p = store.dispatch(checkAuth());

store.dispatch(fetchFilmList());
store.dispatch(fetchPromoFilm());
store.dispatch(fetchFavoriteFilms());


p.finally(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter history={browserHistory}>
          <App/>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'));
});

