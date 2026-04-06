import React, { useContext } from "react";
import BookCard from "../Ui/BookCard";
import { BookContext } from "../../Context/BookProveider";

const ListedWishList = () => {
  const { wishList } = useContext(BookContext);

  if (wishList.length === 0) {
    return (
      <div className="flex items-center justify-center h-100">
        <h2 className="text-4xl font-bold">Not found wish list data</h2>
      </div>
    );
  }

  return (
    <section>
      <div>
        <div className="grid grid-cols-3 gap-10 mt-10">
          {wishList.map((book, ind) => (
            <BookCard key={ind} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListedWishList;
