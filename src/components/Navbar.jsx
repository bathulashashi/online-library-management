import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Library</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/books/Fiction">Browse Books</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/add-book">Add Book</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
