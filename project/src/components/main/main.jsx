import React from 'react';
import PropTypes from 'prop-types';
import FilmList from '../film-list/film-list.jsx';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import { connect } from 'react-redux';
import {ActionCreator} from '../../store/action.js';
import {GENRES} from '../../store/reducer.js';
import GenresList from '../genres-list/genres-list.jsx';


function Main({promoFilm, genre, films, changeGenre}) {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt={promoFilm.title} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt={promoFilm.title} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.year}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList genre={genre} changeGenre={changeGenre}/>

          <div className="catalog__films-list">
            <FilmList  films={films}/>
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

Main.propTypes = {
  promoFilm: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
    }),
  ),
  genre: PropTypes.string.isRequired,
  changeGenre: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      rating: PropTypes.string.isRequired,
      ratings: PropTypes.number.isRequired,
      director: PropTypes.string.isRequired,
      starring: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      video: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ),
};

export { Main };

const mapStateToProps = (state) => {

  let filteredFilms = state.films;

  if (state.genre !== GENRES.ALLGENRES) {
    filteredFilms = state.films.filter((film) => film.genre === state.genre);
  }

  return {
    genre: state.genre,
    films: filteredFilms,
  };
};

// changeGenre: (genre) => ({
//   type: ActionType.CHANGE_GENRE,
//   payload: genre,
// }),
const mapDispatchToProps = (dispatch) => ({
  changeGenre (genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
