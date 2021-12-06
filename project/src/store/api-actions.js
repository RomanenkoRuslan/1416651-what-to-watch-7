import {AuthorizationStatus, APIRoute} from '../const';
import {loadData, loadPromoFilm, loadSimilarFilm, loadComments, requireAuthorization, postComments, logout, loadFavoriteFilms, updateFavoriteFilm} from './action.js';
import { adaptDataToClient } from './adapter';

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(loadData(data.map((film) => adaptDataToClient(film)))))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
    .then(({data}) => dispatch(loadPromoFilm(adaptDataToClient(data))))
);

export const fetchFavoriteFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE_FILMS, { headers: { 'x-token': localStorage.getItem('token') }})
    .then(({data}) => dispatch(loadFavoriteFilms(data.map((film) => adaptDataToClient(film)))))
);

export const fetchSimilarFilm = (id) => (dispatch, _getState, api) => (
  api.get(`films/${id}/similar`)
    .then(({data}) => dispatch(loadSimilarFilm(data.map((film) => adaptDataToClient(film)))))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`, { headers: { 'x-token': localStorage.getItem('token') }})
    .then(({data}) => dispatch(loadComments(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN, { headers: { 'x-token': localStorage.getItem('token') } })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => api.post(APIRoute.LOGIN, {email, password})
  .then(({data}) => localStorage.setItem('token', data.token))
  .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
  .catch(() =>{});

export const postComment = (filmId, {rating, comment}) => (dispatch, _getState, api) => api.post(`/comments/${filmId}`, {rating, comment}, { headers: { 'x-token': localStorage.getItem('token') }})
  .then(({data}) => dispatch(postComments(data)));


export const postFavorite = (filmId, {film, status}) => (dispatch, _getState, api) => api.post(`/favorite/${filmId}/${status}`, {}, { headers: { 'x-token': localStorage.getItem('token') }})
  .then(({data}) => dispatch(updateFavoriteFilm(adaptDataToClient(data))));

export const logoutSite = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(logout()))
);
