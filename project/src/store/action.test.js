import { AuthorizationStatus } from '../const.js';
import {
  changeGenre,
  getFilmList,
  loadData,
  loadPromoFilm,
  loadFavoriteFilms,
  loadSimilarFilm,
  loadComments,
  requireAuthorization,
  postComments,
  updateFavoriteFilm,
  logout,
  ActionType
} from './action.js';

describe('Action', () => {
  it('action creator for changeGenre returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_GENRE,
      payload: 'Crime',
    };

    expect(changeGenre('Crime')).toEqual(expectedAction);
  });

  it('action creator for getFilmList returns correct action', () => {
    const expectedAction = {
      type: ActionType.GET_FILM_LIST,
    };

    expect(getFilmList()).toEqual(expectedAction);
  });

  it('action creator for loadData returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_DATA,
      payload: [],
    };

    expect(loadData([])).toEqual(expectedAction);
  });

  it('action creator for loadPromoFilm returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_PROMO_FILM,
      payload: [],
    };

    expect(loadPromoFilm([])).toEqual(expectedAction);
  });

  it('action creator for loadFavoriteFilms returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: [],
    };

    expect(loadFavoriteFilms([])).toEqual(expectedAction);
  });

  it('action creator for loadSimilarFilm returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_SIMILAR_FILM,
      payload: [],
    };

    expect(loadSimilarFilm([])).toEqual(expectedAction);
  });

  it('action creator for loadComments returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: [],
    };

    expect(loadComments([])).toEqual(expectedAction);
  });

  it('action creator for loadCorequireAuthorizationmments returns correct action', () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(requireAuthorization(AuthorizationStatus.AUTH)).toEqual(expectedAction);
  });

  it('action creator for postComments returns correct action', () => {
    const expectedAction = {
      type: ActionType.POST_COMMENT,
      payload: {},
    };

    expect(postComments({})).toEqual(expectedAction);
  });

  it('action creator for updateFavoriteFilm returns correct action', () => {
    const expectedAction = {
      type: ActionType.UPDATE_FAVORITE_FILM,
      payload: {},
    };

    expect(updateFavoriteFilm({})).toEqual(expectedAction);
  });

  it('action creator for logout returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(logout()).toEqual(expectedAction);
  });
});
