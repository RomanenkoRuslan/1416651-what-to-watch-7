import PropTypes from 'prop-types';
import React from 'react';

function ButtonMore(props) {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={props.onClick}>Show more</button>
    </div>
  );
}

ButtonMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonMore;
