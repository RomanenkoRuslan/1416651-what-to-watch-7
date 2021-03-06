import { reducer, GENRES } from './reducer.js';
import {AuthorizationStatus} from '../const.js';
import { changeGenre, loadData, loadPromoFilm, loadSimilarFilm, loadComments, requireAuthorization, postComments, logout, loadFavoriteFilms, updateFavoriteFilm } from './action.js';

const defaultInitialState = {
  genre: GENRES.ALLGENRES,
  films: [],
  promoFilm: {},
  similarFilm: [],
  favoriteFilms: [],
  comments: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
};

describe('Reducer', () => {
  it('reducer returns initial state', () => {

    expect(reducer(undefined, {})).toEqual(defaultInitialState);
  });

  it('should update authorizationStatus to AUTH', () => {
    const expectedState= {
      genre: GENRES.ALLGENRES,
      films: [],
      promoFilm: {},
      similarFilm: [],
      favoriteFilms: [],
      comments: [],
      authorizationStatus: AuthorizationStatus.AUTH,
      isDataLoaded: false,
    };

    expect(reducer(defaultInitialState, requireAuthorization(AuthorizationStatus.AUTH))).toEqual(expectedState);
  });

  it('should update genre', () => {
    const expectedState= {
      genre: GENRES.COMEDY,
      films: [],
      promoFilm: {},
      similarFilm: [],
      favoriteFilms: [],
      comments: [],
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      isDataLoaded: false,
    };

    expect(reducer(defaultInitialState, changeGenre(GENRES.COMEDY))).toEqual(expectedState);
  });

  it('should load Data', () => {
    const expectedState= {
      genre: GENRES.ALLGENRES,
      films: [{}, {}, {}],
      promoFilm: {},
      similarFilm: [],
      favoriteFilms: [],
      comments: [],
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      isDataLoaded: true,
    };

    expect(reducer(defaultInitialState, loadData([{}, {}, {}]))).toEqual(expectedState);
  });

  it('should load Promo Film', () => {
    const expectedState= {
      genre: GENRES.ALLGENRES,
      films: [],
      promoFilm: {},
      similarFilm: [],
      favoriteFilms: [],
      comments: [],
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      isDataLoaded: false,
    };

    expect(reducer(defaultInitialState, loadPromoFilm({}))).toEqual(expectedState);
  });

  it('should load Favorite Films', () => {
    const expectedState= {
      genre: GENRES.ALLGENRES,
      films: [],
      promoFilm: {},
      similarFilm: [],
      favoriteFilms: [{}, {}, {}],
      comments: [],
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      isDataLoaded: false,
    };

    expect(reducer(defaultInitialState, loadFavoriteFilms([{}, {}, {}]))).toEqual(expectedState);
  });

  it('should load Similar Film', () => {
    const expectedState= {
      genre: GENRES.ALLGENRES,
      films: [],
      promoFilm: {},
      similarFilm: [{}, {}, {}],
      favoriteFilms: [],
      comments: [],
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      isDataLoaded: false,
    };

    expect(reducer(defaultInitialState, loadSimilarFilm([{}, {}, {}]))).toEqual(expectedState);
  });

  it('should load Comments', () => {
    const expectedState= {
      genre: GENRES.ALLGENRES,
      films: [],
      promoFilm: {},
      similarFilm: [],
      favoriteFilms: [],
      comments: [{}, {}, {}],
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      isDataLoaded: false,
    };

    expect(reducer(defaultInitialState, loadComments([{}, {}, {}]))).toEqual(expectedState);
  });

  it('should post Comments', () => {
    const expectedState= {
      genre: GENRES.ALLGENRES,
      films: [],
      promoFilm: {},
      similarFilm: [],
      favoriteFilms: [],
      comments: [{}, {}, {}],
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      isDataLoaded: false,
    };

    expect(reducer(defaultInitialState, postComments([{}, {}, {}]))).toEqual(expectedState);
  });

  it('should updateFavoriteFilm: add film to favoriteFilms', () => {
    const expectedState= {
      genre: GENRES.ALLGENRES,
      films: [],
      promoFilm: {},
      similarFilm: [],
      favoriteFilms: [{isFavorite: true}],
      comments: [],
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      isDataLoaded: false,
    };

    expect(reducer(defaultInitialState, updateFavoriteFilm({isFavorite: true}))).toEqual(expectedState);
  });

  it('should updateFavoriteFilm: remove film from favoriteFilms', () => {
    const defaultInitialStateTwo = {
      genre: GENRES.ALLGENRES,
      films: [],
      promoFilm: {},
      similarFilm: [],
      favoriteFilms: [{id: 123, isFavorite: true}],
      comments: [],
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      isDataLoaded: false,
    };

    const expectedState= {
      genre: GENRES.ALLGENRES,
      films: [],
      promoFilm: {},
      similarFilm: [],
      favoriteFilms: [],
      comments: [],
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      isDataLoaded: false,
    };

    expect(reducer(defaultInitialStateTwo, updateFavoriteFilm({id: 123, isFavorite: false}))).toEqual(expectedState);
  });

  it('should logout', () => {
    const expectedState= {
      genre: GENRES.ALLGENRES,
      films: [],
      promoFilm: {},
      similarFilm: [],
      favoriteFilms: [],
      comments: [],
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      isDataLoaded: false,
    };

    expect(reducer(defaultInitialState, logout())).toEqual(expectedState);
  });
});
