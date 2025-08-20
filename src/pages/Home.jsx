import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const books = useSelector(state => state.books.books);
  const popularBooks = books.slice(0, 4); // first 4 as popular

  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Online Library</h1>
      <p className="mb-2">Select a category to browse books:</p>
      <ul className="mb-4 list-disc ml-6">
        <li><Link to="/books/Fiction">Fiction</Link></li>
        <li><Link to="/books/Non-Fiction">Non-Fiction</Link></li>
        <li><Link to="/books/Sci-Fi">Sci-Fi</Link></li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Popular Books</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {popularBooks.map(book => (
          <div key={book.id} className="bg-gray-900 p-2 rounded shadow">
            <img src={book.coverImage} alt={book.title} className="h-40 w-full object-cover mb-1" />
            <h5 className="text-sm font-bold">{book.title}</h5>
            <Link to={`/book/${book.id}`} className="text-blue-400 text-xs">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
