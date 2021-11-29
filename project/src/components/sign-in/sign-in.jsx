import React from 'react';
import Footer from '../footer/footer.jsx';
import { login } from '../../store/api-actions.js';
import {AppRoute} from '../../const.js';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function SignIn() {
  const loginRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // passwordRef.current.value.split().forEach((element) => {
    //   console.log(element);
    //   if (element === '') {
    //     console.log('FFFFFFFFFFFFFFFFFFF');
    //   }
    // });

    dispatch(login({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    }));
    history.push(AppRoute.MAIN);
  };


  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={loginRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                data-testid="login"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                ref={passwordRef}
                minLength="4"
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                data-testid="password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" >Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default SignIn;
