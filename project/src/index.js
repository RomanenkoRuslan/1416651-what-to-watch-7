import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {getRandomInRange, getRandomItem} from './utils.js';
import {TITLESFILMS, GENRES, SUMFILMS} from './const.js';
import Films from './mocks/films.js';
import Reviews from './mocks/reviews.js';

function getFilmCard() {
  return {
    id: getRandomInRange(10000, 99999),
    title: getRandomItem(TITLESFILMS),
    genre: getRandomItem(GENRES),
    year: getRandomInRange(2021, 1990),
  };
}

const filmsArray = new Array(SUMFILMS).fill().map(getFilmCard);
export default filmsArray;

const filmCard = getFilmCard();

// {
//   element: 'div',
//   children: [
//     {element: 'h1', text: 'Hello'}
//   ]
// }
ReactDOM.render(
  <React.StrictMode>
    <App
      film={filmCard}
      films={Films}
      reviews={Reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
