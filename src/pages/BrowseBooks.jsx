import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BookCard from '../components/BookCard';

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector(state => state.books.books);

  const [searchTerm, setSearchTerm] = useState("");
const filteredBooks = books.filter(book =>
  book.category === category &&
  (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
   book.author.toLowerCase().includes(searchTerm.toLowerCase()))
);


  return (
    <div className="text-white">
      <h2>{category} Books</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by book title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="row">
        {filteredBooks.map(book => (
          <div key={book.id} className="col-md-4">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseBooks;
