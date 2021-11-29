export const SUMFILMS = 20;

export const TITLESFILMS = [
  'Fantastic Beasts: The Crimes of Grindelwald',
  'Bohemian Rhapsody',
  'Macbeth',
  'Aviator',
  'We need to talk about Kevin',
  'What We Do in the Shadows',
  'Revenant',
  'Johnny English',
  'Shutter Island',
  'Pulp Fiction',
  'No Country for Old Men',
  'Snatch',
  'Moonrise Kingdom',
  'Seven Years in Tibet',
  'Midnight Special',
  'War of the Worlds',
  'Dardjeeling Limited',
  'Orlando',
  'Mindhunter',
  'Midnight Special',
];

export const GENRES = [
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers',
];

export const AppRoute = {
  MAIN: '/',
  LOGIN: '/login',
  MYLIST: '/mylist',
  FILM: '/films/:id',
  ADDREVIEW: '/films/:id/add-review',
  REVIEW: '/films/:id/review',
  PLAYER: '/player/:id',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  FILMS: '/films',
  PROMO_FILM: '/promo',
  LOGIN: '/login',
  LOGOUT: '/logout',
  SIMILAR_FILM: 'films/:id/similar',
  COMMENTS: '/comments/:film_id',
  FAVORITE_FILMS: '/favorite',
};
