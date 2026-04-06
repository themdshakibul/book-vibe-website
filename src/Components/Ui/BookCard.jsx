import React from "react";
import { FaRegStar } from "react-icons/fa";

const BookCard = ({ book }) => {
  return (
    <>
      <section>
        <div
          key={book.bookId}
          className="flex flex-col h-full space-y-5 p-5 bg-base-300 border border-gray-300 rounded-2xl 
             transition-all duration-300 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:border-success
             cursor-pointer"
        >
          <div className="p-5 flex items-center justify-center bg-gray-100 rounded-2xl">
            <img
              src={book.image}
              className="rounded-2xl h-64 object-contain"
              alt={book.bookName}
            />
          </div>

          <div className="grow space-y-3">
            <div className="flex items-center gap-3">
              {book.tags.map((tag, index) => (
                <span
                  key={index}
                  className="btn btn-xs btn-success text-white rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-2xl font-bold">{book.bookName}</h2>
            <p className="text-lg font-medium text-gray-600">
              By: {book.author}
            </p>
          </div>

          <div className="mt-auto">
            <hr className="mb-4 mt-4 border-gray-400" />
            <div className="flex items-center justify-between text-lg font-semibold">
              <h3>{book.category}</h3>
              <p className="flex items-center gap-2">
                {book.rating} <FaRegStar className="text-yellow-500" />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookCard;
