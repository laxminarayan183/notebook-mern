import React from "react";
import { useParams } from "react-router-dom";
import { useFetchBookByIdQuery } from "../redux/features/bookapi/booksapi";
import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart/cartSlice";

const SingleBook = () => {
  const { id } = useParams();
  const { data: book, isLoading, isError } = useFetchBookByIdQuery(id);

  const dispatch = useDispatch();
  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };

  if (isLoading) return <div>Loading....</div>;
  if (isError) return <div>Error happening loading data</div>;
  return (
    <>
      <div className="max-w-lg shadow-md p-5">
        <h1 className="text-2xl font-bold mb-6">{book.title}</h1>
        <div>
          <div>
            <img src={book.image} alt="" className="mb-8" />
          </div>
          <div className="mb-5">
            <p className="text-gray-700 mb-2">
              <strong>Author:</strong>
              {book.author || "admin"}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Published:</strong>
              {new Date(book?.createdAt).toLocaleDateString()}
            </p>
            <p className="text-gray-700 mb-4 capitalize">
              <strong>Category:</strong>
              {book?.category}
            </p>
            <p className="text-gray-700">
              <strong>Description:</strong>
              {book.description}
            </p>
          </div>
          <button
            onClick={() => handleAddToCart(book)}
            className="bg-yellow-300 p-2 space-x-1 flex items-center gap-1 rounded-xl"
          >
            <ShoppingCart />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleBook;
