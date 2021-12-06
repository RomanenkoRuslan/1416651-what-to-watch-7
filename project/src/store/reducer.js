import {AuthorizationStatus} from '../const.js';
import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, loadData, loadPromoFilm, loadSimilarFilm, loadComments, requireAuthorization, postComments, logout, loadFavoriteFilms, updateFavoriteFilm } from './action.js';

export const GENRES = {
  ALLGENRES: 'ALLGENRES',
  COMEDY: 'Comedy',
  CRIME: 'Crime',
  DOCUMENTARY: 'Documentary',
  DRAMA: 'Drama',
  ADVENTURE: 'Adventure',
  FANTASY: 'Fantasy',
  ACTION: 'Action',
  THRILLER: 'Thriller',
};


const initialState = {
  genre: GENRES.ALLGENRES,
  films: [],
  promoFilm: {},
  similarFilm: [],
  favoriteFilms: [],
  comments: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadData, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(loadFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
    })
    .addCase(loadSimilarFilm, (state, action) => {
      state.similarFilm = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(postComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(updateFavoriteFilm, (state, action) => {
      const film = action.payload;
      const prevFavoriteFilms = state.favoriteFilms.slice();
      if (film.isFavorite) {
        prevFavoriteFilms.push(film);
        state.favoriteFilms = prevFavoriteFilms;
      } else {
        state.favoriteFilms = prevFavoriteFilms.filter((item) => item.id !== film.id);
      }
    })
    .addCase(logout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    });
});

export {reducer};
