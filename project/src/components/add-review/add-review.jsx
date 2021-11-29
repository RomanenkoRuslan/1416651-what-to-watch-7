import React from 'react';
import { Link } from 'react-router-dom';
import { postComment } from '../../store/api-actions';
import { useParams } from 'react-router';
import { getFilms } from '../../store/selectors';
import {useSelector, useDispatch} from 'react-redux';
import ErrorScreen from '../error-screen/error-screen';

function AddReview() {
  const films = useSelector(getFilms);
  const [newComment, setNewComment] = React.useState(
    {rating: 0, comment: 'No cooment. Only grade!'},
  );
  const { id } = useParams();
  const film = films.find((item) => item.id === parseInt(id, 10));
  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(postComment(
      id, {rating : newComment.rating, comment: newComment.comment},
    ));
  };

  const values = [10,9,8,7,6,5,4,3,2,1];

  let disabledButton;
  if(newComment.rating === 0 || newComment.comment ==='No cooment. Only grade!') {
    disabledButton = true;
  } else {disabledButton = false;}

  function Stars() {
    return (
      values.map((value) => (
        <React.Fragment key={value}>
          <input
            className="rating__input"
            id={`star-${value}`} type="radio" name="rating" value={value}
            defaultChecked={value === newComment.rating}
            onClick={(event) => {
              setNewComment({
                ...newComment,
                rating: Number(event.target.value),
              });
            }}
          />
          <label className="rating__label" htmlFor={`star-${value}`}>Rating item</label>
        </React.Fragment>
      ))
    );
  }

  //if film = undefined
  if (!film) {
    return (<ErrorScreen />);
  }


  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} href='#' className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a href='#' >Add review</a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a href="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={handleSubmit}>
          <div className="rating">
            <div className="rating__stars">
              <Stars />
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text"
              minLength="50"
              maxLength="400"
              data-testid="review-area"
              placeholder="Review text"
              value={newComment.value}
              onChange={(evt) => {
                setNewComment({
                  ...newComment,
                  comment: evt.target.value,
                });
              }}
            >
            </textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" disabled={disabledButton}>
                Post
              </button>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
}

export default AddReview ;
