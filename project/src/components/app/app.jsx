import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

function App(props) {
  const {title, genre, year} = props.film;
  return (
    <Main title={title} genre={genre} year={year} />
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
