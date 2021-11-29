import React from 'react';
import Review from '../review/review';
import PropTypes from 'prop-types';

function FilmReviews(props) {
  const comments = props.coments;
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.length === 0 ? <h1>No comments</h1> : ''}
        {comments.map((comment) => <Review key={comment.id} comment={comment}/>)}
      </div>
      <div className="film-card__reviews-col">
      </div>
    </div>
  );
}

FilmReviews.propTypes = {
  coments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    }),
  ),
};

export default FilmReviews;
