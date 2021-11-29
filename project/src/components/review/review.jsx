import React from 'react';
import PropTypes from 'prop-types';

function Review(props) {
  const review = props.comment;
  const date = new Date(review.date);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const newDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime={date}>{newDate}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

Review.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Review;
