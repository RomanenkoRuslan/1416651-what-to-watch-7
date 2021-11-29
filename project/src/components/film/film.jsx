import React, {useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import FilmList from '../film-list/film-list.jsx';
import FilmCardNavigation from '../film-card-navigation/film-card-navigation.jsx';
import { fetchSimilarFilm, fetchComments } from '../../store/api-actions.js';
import { AuthorizationStatus } from '../../const.js';
import { getFilms, getComments, getSimilarFilm, getAuthorizationStatus, getFavoriteFilms } from '../../store/selectors.js';
import {useSelector, useDispatch} from 'react-redux';
import { postFavorite } from '../../store/api-actions.js';
import ErrorScreen from '../error-screen/error-screen.jsx';

function Film() {
  const { id } = useParams();
  const films = useSelector(getFilms);
  const film = films.find((item) => item.id === parseInt(id, 10));
  const comments = useSelector(getComments);
  const favoriteFilms = useSelector(getFavoriteFilms);
  const similarFilm = useSelector(getSimilarFilm);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const dispatch = useDispatch();
  const isFavorite = favoriteFilms.find((item) => item.id === film.id) !== undefined;

  const handlePostFavoriteFilm = (evt) => {
    const tmp = favoriteFilms.find((item) => item.id === film.id);
    const status = tmp === undefined ? 1 : 0;

    evt.preventDefault();
    dispatch(postFavorite(
      id,{film,status},
    ));
  };

  useEffect(() => {
    dispatch(fetchSimilarFilm(id));
  }, [id, fetchSimilarFilm]);

  useEffect(() => {
    dispatch(fetchComments(id));
  }, [id, fetchComments]);

  //if film = undefined
  if (!film) {
    return (<ErrorScreen />);
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${film.id}`} style={{textDecoration: 'none'}}>
                  <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                </Link>
                {authorizationStatus === AuthorizationStatus.AUTH ?
                  <button className="btn btn--list film-card__button" type="button" onClick={handlePostFavoriteFilm}>
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      {isFavorite ? <use xlinkHref="#in-list"></use> : <use xlinkHref="#add"></use>}
                    </svg>
                    <span>My list</span>
                  </button> : ''}
                {authorizationStatus === AuthorizationStatus.AUTH ? <Link to={`/films/${id}/add-review`} className="btn film-card__button">Add review</Link> : ''}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <FilmCardNavigation film={film} comments={comments}/>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList films={similarFilm} isButton={false}/>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Film;

