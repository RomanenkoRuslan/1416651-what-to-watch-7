const films = [
  {
    id: 32453,
    title: 'The Grand Budapest Hotel',
    genre: 'Drama',
    year: 2014,
    rating: '8,9',
    ratings: 240,
    director: 'Wes Andreson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
    poster: 'the-grand-budapest-hotel-poster.jpg',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege. Gustave prides himself on providing first-class service to the hotels guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustaves lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
  },
  {
    id: 45456,
    title: 'The Dance of Life',
    genre: 'Romance',
    year: 2002,
    rating: '7,5',
    ratings: 120,
    director: 'Martin Scorsese',
    starring: 'Ira Sachs, Edward Norton, Victor Salva, Richard Side',
    poster: 'the-grand-budapest-hotel-poster.jpg',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege. Gustave prides himself on providing first-class service to the hotels guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustaves lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
  },
  {
    id: 346436,
    title: 'The Man with the Golden Arm',
    genre: 'Tragedy',
    year: 1975,
    rating: '9,1',
    ratings: 54,
    director: 'Christopher Nolan',
    starring: 'Keith Samples, Paul Savage, Victor Salva, Richard Side',
    poster: 'the-grand-budapest-hotel-poster.jpg',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege. Gustave prides himself on providing first-class service to the hotels guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustaves lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
  },
  {
    id: 425644,
    title: 'Popeye the Sailor Meets Sindbad the Sailor',
    genre: 'Monster Stories',
    year: 2010,
    rating: '6,4',
    ratings: 93,
    director: 'Quentin Tarantino',
    starring: 'Deran Sarafian, Peter Sullivan, Victor Salva, Richard Side',
    poster: 'the-grand-budapest-hotel-poster.jpg',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege. Gustave prides himself on providing first-class service to the hotels guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustaves lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
  },
  {
    id: 789087,
    title: 'The Grand Budapest Hotel',
    genre: 'Drama',
    year: 1945,
    rating: '9,9',
    ratings: 1140,
    director: 'Wes Andreson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
    poster: 'the-grand-budapest-hotel-poster.jpg',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege. Gustave prides himself on providing first-class service to the hotels guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustaves lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
  },
  {
    id: 536653,
    title: 'The Dance of Life',
    genre: 'Romance',
    year: 2021,
    rating: '7,9',
    ratings: 196,
    director: 'Martin Scorsese',
    starring: 'Ira Sachs, Edward Norton, Victor Salva, Richard Side',
    poster: 'the-grand-budapest-hotel-poster.jpg',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege. Gustave prides himself on providing first-class service to the hotels guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustaves lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
  },
  {
    id: 537348,
    title: 'The Man with the Golden Arm',
    genre: 'Tragedy',
    year: 2016,
    rating: '9,7',
    ratings: 454,
    director: 'Christopher Nolan',
    starring: 'Keith Samples, Paul Savage, Victor Salva, Richard Side',
    poster: 'the-grand-budapest-hotel-poster.jpg',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege. Gustave prides himself on providing first-class service to the hotels guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustaves lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
  },
  {
    id: 7355,
    title: 'Popeye the Sailor Meets Sindbad the Sailor',
    genre: 'Monster Stories',
    year: 7974,
    rating: '8,4',
    ratings: 293,
    director: 'Quentin Tarantino',
    starring: 'Deran Sarafian, Peter Sullivan, Victor Salva, Richard Side',
    poster: 'the-grand-budapest-hotel-poster.jpg',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege. Gustave prides himself on providing first-class service to the hotels guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustaves lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
  },
];

export default films;
