import React from 'react';
import FilmList from '../film-list/film-list.jsx';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import { useSelector } from 'react-redux';
import { getFavoriteFilms } from '../../store/selectors.js';

function MyList() {
  const favoriteFilms = useSelector(getFavoriteFilms);
  return (
    <div className="user-page">
      <section className="catalog">
        <Header>
          <h1 className="page-title user-page__title" style={{top: '70px', width: '200px'}}>My list</h1>
        </ Header>
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        {
          favoriteFilms.length > 0 ?
            <FilmList films={favoriteFilms} isButton/> :
            <p style={{display: 'flex', justifyContent: 'center', color: 'red'}}>Your list is empty!!! Add films!</p>
        }
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
