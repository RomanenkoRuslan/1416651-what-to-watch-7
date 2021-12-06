import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_GENRE:  'CHANGEGENRE',
  GET_FILM_LIST: 'GETFILMLIST',
  LOAD_DATA: 'LOADDATA',
  LOAD_PROMO_FILM: 'LOADPROMOFILM',
  LOAD_SIMILAR_FILM: 'LOADSIMILARFILM',
  LOAD_COMMENTS: 'LOADCOMMENTS',
  REQUIRED_AUTHORIZATION: 'REQUIREDAUTHORIZATION',
  POST_COMMENT: 'POSTCOMMENTS',
  LOGOUT: 'LOGOUT',
  LOAD_FAVORITE_FILMS: 'LOADFAVORITEFILMS',
  UPDATE_FAVORITE_FILM: 'UPDATEFAVORITEFILM',
};

export const changeGenre = createAction(ActionType.CHANGE_GENRE, (genre) => ({
  payload: genre,
}));

export const getFilmList = createAction(ActionType.GET_FILM_LIST);

export const loadData = createAction(ActionType.LOAD_DATA, (payload) => ({
  payload: payload,
}));

export const loadPromoFilm = createAction(ActionType.LOAD_PROMO_FILM, (payload) => ({
  payload: payload,
}));

export const loadFavoriteFilms = createAction(ActionType.LOAD_FAVORITE_FILMS, (payload) => ({
  payload: payload,
}));

export const loadSimilarFilm = createAction(ActionType.LOAD_SIMILAR_FILM, (payload) => ({
  payload: payload,
}));

export const loadComments = createAction(ActionType.LOAD_COMMENTS, (payload) => ({
  payload: payload,
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const postComments = createAction(ActionType.POST_COMMENT, (status) => ({
  payload: status,
}));

export const updateFavoriteFilm = createAction(ActionType.UPDATE_FAVORITE_FILM, (film) => ({
  payload: film,
}));

export const logout = createAction(ActionType.LOGOUT);
