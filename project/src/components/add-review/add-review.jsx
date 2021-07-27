import React from 'react';

function AddReview() {
  const [newComment, setNewComment] = React.useState(
    {grade: 8, text: 'No cooment. Only grade!'},
  );

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span clasclassNames="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
              </li>
              <li className="breadcrumbs__item">
                <a href="breadcrumbs__link">Add review</a>
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
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <h3>
              {newComment.grade}
            </h3>
            <h3>
              {newComment.text}
            </h3>
            <div className="rating__stars">
              <input className="rating__input" id="star-10" type="radio" name="rating" value="10"
                onClick={() => {
                  const value = document.querySelector('#star-10').value;
                  setNewComment({
                    ...newComment,
                    grade: value,
                  });
                }}
              />
              <label className="rating__label" htmlFor="star-10">Rating 10</label>

              <input className="rating__input" id="star-9" type="radio" name="rating" value="9"
                onClick={() => {
                  const value = document.querySelector('#star-9').value;
                  setNewComment({
                    ...newComment,
                    grade: value,
                  });
                }}
              />
              <label className="rating__label" htmlFor="star-9">Rating 9</label>

              <input className="rating__input" id="star-8" type="radio" name="rating" value="8" checked
                onClick={() => {
                  const value = document.querySelector('#star-8').value;
                  setNewComment({
                    ...newComment,
                    grade: value,
                  });
                }}
              />
              <label className="rating__label" htmlFor="star-8">Rating 8</label>

              <input className="rating__input" id="star-7" type="radio" name="rating" value="7"
                onClick={() => {
                  const value = document.querySelector('#star-7').value;
                  setNewComment({
                    ...newComment,
                    grade: value,
                  });
                }}
              />
              <label className="rating__label" htmlFor="star-7">Rating 7</label>

              <input className="rating__input" id="star-6" type="radio" name="rating" value="6"
                onClick={() => {
                  const value = document.querySelector('#star-6').value;
                  setNewComment({
                    ...newComment,
                    grade: value,
                  });
                }}
              />
              <label className="rating__label" htmlFor="star-6">Rating 6</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5"
                onClick={() => {
                  const value = document.querySelector('#star-5').value;
                  setNewComment({
                    ...newComment,
                    grade: value,
                  });
                }}
              />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4"
                onClick={() => {
                  const value = document.querySelector('#star-4').value;
                  setNewComment({
                    ...newComment,
                    grade: value,
                  });
                }}
              />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3"
                onClick={() => {
                  const value = document.querySelector('#star-3').value;
                  setNewComment({
                    ...newComment,
                    grade: value,
                  });
                }}
              />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2"
                onClick={() => {
                  const value = document.querySelector('#star-2').value;
                  setNewComment({
                    ...newComment,
                    grade: value,
                  });
                }}
              />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-1" type="radio" name="rating" value="1"
                onClick={() => {
                  const value = document.querySelector('#star-1').value;
                  setNewComment({
                    ...newComment,
                    grade: value,
                  });
                }}
              />
              <label className="rating__label" htmlFor="star-1">Rating 1</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit"
                onClick={(evt) => {
                  const value = document.querySelector('.add-review__textarea').value;
                  //eslint-disable
                  // console.log(value);
                  evt.preventDefault();
                  setNewComment({
                    ...newComment,
                    text: value,
                  });
                }}
              >
                Post
              </button>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
}

export default AddReview;
