import React from 'react';
import { Link } from 'react-router-dom';
import {AuthorizationStatus} from '../../const.js';
import { useSelector } from 'react-redux';
import { getAuthorizationStatus } from '../../store/selectors.js';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logoutSite } from '../../store/api-actions.js';

function Header(props) {
  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const logout = (evt) => {
    evt.preventDefault();
    dispatch(logoutSite());
  };

  return (
    <header className="page-header film-card__head">
      <Link to="/" className="logo__link">
        <div className="logo">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </div>
      </Link>
      {props.children}
      <div className="user-block">
        {authorizationStatus === AuthorizationStatus.AUTH ?
          <>
            <div className="user-block__item">
              <Link to="/mylist">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </Link>
            </div>
            <div className="user-block__item" onClick={logout}>
              <Link to="/login">Sign out</Link>
            </div>
          </> :
          <Link to="/login" className="user-block__link">
            Sign in
          </Link>}
      </div>
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
