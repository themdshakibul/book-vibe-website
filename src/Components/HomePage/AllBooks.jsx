import React, { use } from "react";
import BookCard from "../Ui/BookCard";

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
              <BookCard key={book.bookId} book={book} />
            ))}
          </div>
        </div>
      </section>
    </frames>
  );
};

export default AllBooks;
