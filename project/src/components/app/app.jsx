import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import MyList from '../my-list/my-list.jsx';
import Film from '../film/film.jsx';
import AddReview from '../add-review/add-review.jsx';
import ReviewList from '../review-list/review-list.jsx';
import Player from '../player/player.jsx';
import ErrorScreen from '../error-screen/error-screen.jsx';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const.js';

function App(props) {
  const {title, genre, year} = props.film;
  const films = props.films;
  const reviews = props.reviews;
  //eslint-disable
  // console.log(props);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main title={title} genre={genre} year={year} films={films}/>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.MYLIST}>
          <MyList films={films}/>
        </Route>
        <Route exact path={AppRoute.FILM}>
          <Film films={films}/>
        </Route>
        <Route exact path={AppRoute.REVIEW}>
          <ReviewList reviews={reviews} films={films}/>
        </Route>
        <Route exact path={AppRoute.ADDREVIEW}>
          <AddReview />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <Player films={films}/>
        </Route>
        <Route>
          <ErrorScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  film: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
    }),
  ).isRequired,
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
    }).isRequired,
  ),
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default App;
