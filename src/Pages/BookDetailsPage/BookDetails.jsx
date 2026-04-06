import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../Context/BookProveider";

const BookDetails = () => {
  const { bookId } = useParams();

  const books = useLoaderData();

  const expectedBook = books.find((book) => book.bookId === Number(bookId));
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  const { handelMarkRead, handelWishList } = useContext(BookContext);
  console.log(handelMarkRead, handelWishList, "handelMarkRead");

  return (
    <section>
      <div className="container mx-auto px-4 lg:px-10 flex flex-col lg:flex-row items-start justify-center gap-12 mt-10">
        {/* Image Section */}
        <div className="bg-base-300 p-12 rounded-3xl flex justify-center items-center w-full lg:w-1/2">
          <img
            src={image}
            alt={bookName}
            className="rounded-xl shadow-lg max-h-125 object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 w-full">
          <div className="space-y-4 border-b border-gray-200 pb-5">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral">
              {bookName}
            </h2>
            <p className="text-xl font-medium text-gray-600">By: {author}</p>
          </div>

          <p className="text-xl font-medium border-b border-gray-200 py-4 text-gray-700">
            {category}
          </p>

          <div className="py-6">
            <p className="text-gray-600 leading-relaxed">
              <span className="font-bold text-black">Review: </span> {review}
            </p>
          </div>

          {/* Tags Section */}
          <div className="flex items-center gap-4 mb-6 border-b border-gray-200 pb-6">
            <span className="font-bold">Tags:</span>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-1 bg-green-50 text-success font-medium rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Specs Grid */}
          <div className="space-y-3 mb-8">
            <div className="grid grid-cols-[160px_1fr] items-center">
              <span className="text-gray-500">Number of Pages:</span>
              <span className="font-bold text-neutral">{totalPages}</span>
            </div>

            <div className="grid grid-cols-[160px_1fr] items-center">
              <span className="text-gray-500">Publisher:</span>
              <span className="font-bold text-neutral">{publisher}</span>
            </div>

            <div className="grid grid-cols-[160px_1fr] items-center">
              <span className="text-gray-500">Year of Publishing:</span>
              <span className="font-bold text-neutral">{yearOfPublishing}</span>
            </div>

            <div className="grid grid-cols-[160px_1fr] items-center">
              <span className="text-gray-500">Rating:</span>
              <span className="font-bold text-neutral">{rating}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handelMarkRead(expectedBook)}
              className="btn btn-outline border-gray-300 hover:bg-neutral hover:text-white px-8"
            >
              Mark as Read
            </button>
            <button
              onClick={() => handelWishList(expectedBook)}
              className="btn btn-info text-white px-8"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
