import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import MyList from '../my-list/my-list.jsx';
import Film from '../film/film.jsx';
import Review from '../review/review.jsx';
import Player from '../player/player.jsx';
import {Switch, Route, BrowserRouter, Link} from 'react-router-dom';
import {AppRoute} from '../../const.js';

function App(props) {
  const {title, genre, year} = props.film;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main title={title} genre={genre} year={year} />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.MYLIST}>
          <MyList />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <Film />
        </Route>
        <Route exact path={AppRoute.REVIEW}>
          <Review />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <Player />
        </Route>
        <Route>
          <div style={{textAlign: 'center', marginTop: '150px'}}>
            <h1 style={{color: 'red'}}>404 Not Found</h1>
            <Link to="/" style={{color: 'green'}}>Go back to the main page</Link>
          </div>
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
};

export default App;
