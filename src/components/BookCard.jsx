import React, { useRef } from "react";
import { Link } from "react-router-dom";
import anime from "animejs";

function BookCard({ book }) {
  const cardRef = useRef();

  const handleMouseEnter = () => {
    anime({
      targets: cardRef.current,
      scale: 1.05,
      rotate: "0deg",
      easing: "easeInOutQuad",
      duration: 400,
    });
  };

  const handleMouseLeave = () => {
    anime({
      targets: cardRef.current,
      scale: 1,
      rotate: "0deg",
      easing: "easeInOutQuad",
      duration: 400,
    });
  };

  return (
    <div
      ref={cardRef}
      className="card bg-dark text-white mb-4 shadow cursor-pointer"
      style={{ overflow: "hidden" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={book.coverImage}
        className="card-img-top"
        alt={book.title}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">Author: {book.author}</p>
        <Link to={`/book/${book.id}`} className="btn btn-primary btn-sm">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default BookCard;
