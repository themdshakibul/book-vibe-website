import React, { use } from "react";
import { FaRegStar } from "react-icons/fa";

const booksDaytaPromis = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksDaytaPromis);

  return (
    <frames>
      <section>
        <div className="container mx-auto px-2 mb-10 md:mb-20 lg:mb-30">
          <header className="text-center mb-10">
            <h2 className="text-5xl font-bold">Books</h2>
          </header>

          {/* Books Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {books.map((book) => (
              <>
                <div
                  key={book.bookId}
                  className="flex flex-col space-y-5 p-5 bg-base-300 border border-gray-300 rounded-2xl transition-all duration-300 ease-in-out 
                  hover:-translate-y-3 hover:shadow-2xl hover:border-success
                  cursor-pointer"
                >
                  <div className="p-5 flex items-center justify-center">
                    <img
                      src={book.image}
                      className="rounded-2xl h-70 object-cover"
                    />
                  </div>

                  <div className="flex-1 space-y-5">
                    <div className="flex items-center gap-5">
                      {book.tags.map((tag) => (
                        <p className="btn btn-sm btn-success text-white rounded-full">
                          {tag}
                        </p>
                      ))}
                    </div>
                    <h2 className="text-3xl font-semibold">{book.bookName}</h2>
                    <p className="text-xl font-semibold">By: {book.author}</p>
                  </div>

                  <div>
                    <hr className="mb-5 mt-5 text-gray-400" />
                    <div className="flex items-center justify-between text-xl font-semibold">
                      <h3>{book.category}</h3>
                      <p className="flex items-center gap-2">
                        {book.rating} <FaRegStar />
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </frames>
  );
};

export default AllBooks;
