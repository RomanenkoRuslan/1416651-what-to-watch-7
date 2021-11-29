import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../api/api.js';
import {ActionType} from './action.js';
import {fetchFilmList,
  fetchPromoFilm,
  fetchFavoriteFilms,
  fetchSimilarFilm,
  fetchComments,
  checkAuth,
  login,
  postComment,
  postFavorite,
  logoutSite
} from './api-actions.js';
import { APIRoute, AuthorizationStatus} from '../const.js';

let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api =  createAPI(() => {});
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: 'test@test.ru', password: '123456'};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return loginLoader(dispatch, () => {}, apiMock.axiosInstance)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to fetchFilmList', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchFilmListLoader = fetchFilmList();

    apiMock
      .onGet(APIRoute.FILMS)
      .reply(200, [{}, {}, {}]);

    return fetchFilmListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          payload: [{}, {}, {}],
          type: ActionType.LOAD_DATA,
        });
      });
  });

  it('should make a correct API call to fetchPromoFilm', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchPromoFilmLoader = fetchPromoFilm();

    apiMock
      .onGet(APIRoute.PROMO_FILM)
      .reply(200, {});

    return fetchPromoFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          payload: {},
          type: ActionType.LOAD_PROMO_FILM,
        });
      });
  });

  it('should make a correct API call to fetchFavoriteFilms', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchFavoriteFilmsLoader = fetchFavoriteFilms();

    apiMock
      .onGet(APIRoute.FAVORITE_FILMS)
      .reply(200, [{}, {}, {}]);

    return fetchFavoriteFilmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          payload: [{}, {}, {}],
          type: ActionType.LOAD_FAVORITE_FILMS,
        });
      });
  });

  it('should make a correct API call to fetchSimilarFilm', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchSimilarFilmLoader = fetchSimilarFilm(1);

    apiMock
      .onGet('films/1/similar')
      .reply(200, [{}, {}, {}]);

    return fetchSimilarFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          payload: [{}, {}, {}],
          type: ActionType.LOAD_SIMILAR_FILM,
        });
      });
  });

  it('should make a correct API call to fetchComments', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchCommentsLoader = fetchComments(1);

    apiMock
      .onGet('/comments/1')
      .reply(200, [{}, {}, {}]);

    return fetchCommentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          payload: [{}, {}, {}],
          type: ActionType.LOAD_COMMENTS,
        });
      });
  });

  it('should make a correct API call to postComment', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeComment = {rating: 4, comment: 'Good film!'};
    const fakeId = 1;
    const postCommentLoader = postComment(fakeId, fakeComment);

    apiMock
      .onPost('/comments/1')
      .reply(200, [{fake: true}]);

    return postCommentLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.POST_COMMENT,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a correct API call to postFavorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const postFavoriteLoader = postFavorite(fakeId, {status: 0});

    apiMock
      .onPost('/favorite/1/0')
      .reply(200, {});

    return postFavoriteLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_FAVORITE_FILM,
          payload: {},
        });
      });
  });

  it('should make a correct API call to logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logoutSite();

    Storage.prototype.removeItem = jest.fn();

    apiMock
      .onDelete(APIRoute.LOGOUT)
      .reply(204, [{fake: true}]);

    return logoutLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).nthCalledWith(1, {
          type: ActionType.LOGOUT,
        });

        expect(Storage.prototype.removeItem).toHaveBeenCalledTimes(1);
        expect(Storage.prototype.removeItem).nthCalledWith(1, 'token');
      });
  });
});
