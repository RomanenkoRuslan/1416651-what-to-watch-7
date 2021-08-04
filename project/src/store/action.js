export const ActionType = {
  CHANGE_GENRE:  'CHANGEGENRE',
  GET_FILM_LIST: 'GETFILMLIST',
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getFilmList: () => ({
    type: ActionType.GET_FILM_LIST,
  }),
};
