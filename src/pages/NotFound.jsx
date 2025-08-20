import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="text-white text-center">
      <h2>404 - Page Not Found</h2>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
}

export default NotFound;