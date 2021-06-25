import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {getRandomInRange, getRandomItem} from './utils.js';
import {TITLESFILMS, GENRES} from './const.js';

function getFilmCard() {
  return {
    title: getRandomItem(TITLESFILMS),
    genre: getRandomItem(GENRES),
    year: getRandomInRange(2021, 1990),
  };
}

const filmCard = getFilmCard();

ReactDOM.render(
  <React.StrictMode>
    <App
      title={filmCard.title}
      genre={filmCard.genre}
      year={filmCard.year}
    />
  </React.StrictMode>,
  document.getElementById('root'));
