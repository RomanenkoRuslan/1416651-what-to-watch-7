import { ActionType } from './action.js';
import films from '../mocks/films.js';

export const GENRES = {
  ALLGENRES: 'ALLGENRES',
  COMEDIES: 'Comedies',
  CRIME: 'Crime',
  DOCUMENTARY: 'Documentary',
  DRAMS: 'Dramas',
  HORROR: 'Horror',
  KIDSANDFAMILY: 'Kids & Family',
  ROMANCE: 'Romance',
  SCIFI: 'Sci-Fi',
  THRILLERS: 'Thrillers',
};


const initialState = {
  genre: GENRES.ALLGENRES,
  films : films,
};

// {
//   type: ActionType.CHANGE_GENRE,
//   payload: "ALLGENRES",
// }
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
