import React from 'react';
import {Link} from 'react-router-dom';

function ErrorScreen() {
  return (
    <div style={{textAlign: 'center', marginTop: '150px'}}>
      <h1 style={{color: 'red'}}>404 Not Found</h1>
      <Link to="/" style={{color: 'green'}}>Go back to the main page</Link>
    </div>
  );
}

export default ErrorScreen;
