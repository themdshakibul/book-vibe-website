import React, { useContext } from "react";
import { BookContext } from "../../Context/BookProveider";
import BookCard from "../Ui/BookCard";

const ListedReadList = () => {
  const { readList } = useContext(BookContext);

  if (readList.length === 0) {
    return (
      <div className="flex items-center justify-center h-100">
        <h2 className="text-4xl font-bold">Not found Read list data</h2>
      </div>
    );
  }

  return (
    <section>
      <div className="grid grid-cols-3 gap-10 mt-10">
        {readList.map((book, ind) => (
          <BookCard key={ind} book={book} />
        ))}
      </div>
    </section>
  );
};

export default ListedReadList;
