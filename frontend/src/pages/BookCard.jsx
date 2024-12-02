// import React from "react";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/features/cart/cartSlice";
import { ShoppingCart } from "lucide-react";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };
  return (
    <div className="rounded-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-4">
        <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
          <Link to={`/books/${book._id}`}>
            <img
              src={book.image}
              alt=""
              className="h-72 w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-10s transition-all duration-200"
            />
          </Link>
        </div>
      </div>
      <div className="p-2">
        <Link to={`/books/${book._id}`}>
          <h3 className="text-xl font-semibold hover:text-orange-600 p-4 text-center">
            {book.title}
          </h3>
        </Link>
        <p className="text-gray-600 p-2">
          {book.description.length > 80
            ? `${book.description.slice(0, 80)}...`
            : book.description}
        </p>
        <p className="font-medium p-2">
          {book.newPrice}
          <span className="line-through font-normal ml-2">{book.oldPrice}</span>
        </p>
        <button
          className="bg-yellow-400 px-6 space-x-1 flex items-center gap-1 p-2 rounded-full"
          onClick={() => handleAddToCart(book)}
        >
          <ShoppingCart /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookCard;
