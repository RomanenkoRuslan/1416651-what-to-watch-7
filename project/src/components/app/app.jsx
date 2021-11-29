import React from 'react';
import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import MyList from '../my-list/my-list.jsx';
import Film from '../film/film.jsx';
import AddReview from '../add-review/add-review.jsx';
import Player from '../player/player.jsx';
import ErrorScreen from '../error-screen/error-screen.jsx';
import {Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const.js';
import { AuthorizationStatus } from '../../const.js';
import PrivateRoute from '../private-route/private-route.jsx';
import { getAuthorizationStatus, getIsDataLoaded, getFilms, getPromoFilm } from '../../store/selectors.js';
import { useSelector } from 'react-redux';

const isCheckedAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.UNKNOWN;


function App() {
  const isDataLoaded = useSelector(getIsDataLoaded);
  const films = useSelector(getFilms);
  const promoFilm = useSelector(getAuthorizationStatus);
  const authorizationStatus = useSelector(getPromoFilm);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <h1>Welcome! Loading...</h1>
    );
  }

  return (
    <Switch>
      <Route exact path={AppRoute.MAIN}>
        <Main promoFilm={promoFilm} />
      </Route>
      <Route exact path={AppRoute.LOGIN}>
        <SignIn />
      </Route>
      <PrivateRoute exact path={AppRoute.MYLIST} render={() => <MyList  films={films}/>}>
      </PrivateRoute>
      <Route exact path={AppRoute.FILM}>
        <Film films={films}/>
      </Route>
      <PrivateRoute exact path={AppRoute.ADDREVIEW} render={() => <AddReview />}>
      </PrivateRoute>
      <Route exact path={AppRoute.PLAYER}>
        <Player />
      </Route>
      <Route>
        <ErrorScreen />
      </Route>
    </Switch>
  );
}

export default App;
