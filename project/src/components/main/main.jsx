import React from 'react';
import FilmList from '../film-list/film-list.jsx';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import {GENRES} from '../../store/reducer.js';
import GenresList from '../genres-list/genres-list.jsx';
import {changeGenre} from '../../store/action.js';
import {useSelector, useDispatch} from 'react-redux';
import { getGenre, getFilms, getAuthorizationStatus, getPromoFilm, getFavoriteFilms} from '../../store/selectors.js';
import { AuthorizationStatus } from '../../const.js';
import { postFavorite } from '../../store/api-actions.js';

import { Link } from 'react-router-dom';

function Main() {

  const promoFilm = useSelector(getPromoFilm);
  const favoriteFilms = useSelector(getFavoriteFilms);
  const genre = useSelector(getGenre);
  let films = useSelector(getFilms);
  let filteredFilms = useSelector(getFilms);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();
  const id = promoFilm.id;
  const isFavorite = favoriteFilms.find((item) => item.id === promoFilm.id) !== undefined;

  const handlePostFavoriteFilm = (evt) => {
    const tmp = favoriteFilms.find((item) => item.id === promoFilm.id);
    const status = tmp === undefined ? 1 : 0;

    evt.preventDefault();
    dispatch(postFavorite(
      id,{promoFilm,status},
    ));
  };

  if (genre !== GENRES.ALLGENRES) {
    filteredFilms = films.filter((film) => film.genre === genre);
  }

  films = filteredFilms;

  const onChangeGenre = (genreFilms) => dispatch(changeGenre(genreFilms));

  return (
    <>
      <section className="film-card" style={{backgroundColor: promoFilm.backgroundColor}}>
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={promoFilm.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${promoFilm.id}`} style={{textDecoration: 'none'}}>
                  <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                </Link>
                {
                  authorizationStatus === AuthorizationStatus.AUTH ?
                    <button className="btn btn--list film-card__button" type="button" onClick={handlePostFavoriteFilm}>
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        {isFavorite ? <use xlinkHref="#in-list"></use> : <use xlinkHref="#add"></use>}
                      </svg>
                      <span>My list</span>
                    </button> : ''
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList genre={genre} onChangeGenre={onChangeGenre}/>

          <FilmList  films={films} isButton/>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Main;
