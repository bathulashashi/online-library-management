import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BookDetails() {
  const { id } = useParams();
  const book = useSelector(state => state.books.books.find(b => b.id.toString() === id));

  if (!book) {
    return <div className="text-white">Book not found</div>;
  }

  return (
    <div className="text-white">
      <h2>{book.title}</h2>
      <img src={book.coverImage} alt={book.title} style={{ maxWidth: '300px', marginBottom: '20px' }} />
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Description:</strong> {book.description || "No description available"}</p>
      <p><strong>Rating:</strong> {book.rating || "Not rated yet"}</p>

      <Link to={`/books/${book.category}`} className="btn btn-secondary">Back to {book.category}</Link>
    </div>
  );
}

export default BookDetails;