import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../Context/BookProveider";
import BookCard from "../Ui/BookCard";

const ListedReadList = ({ sortingType }) => {
  const { readList } = useContext(BookContext);

  const [filterRedList, setFilterReadList] = useState(readList);

  //   Sorting Data and filter pages and reating
  useEffect(() => {
    if (sortingType) {
      if (sortingType === "pages") {
        const sortedData = [...readList].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setFilterReadList(sortedData);
      } else if (sortingType === "reating") {
        const sortedData = [...readList].sort((a, b) => a.rating - b.rating);
        setFilterReadList(sortedData);
      }
    }
  }, [sortingType, readList]);

  // Not found pages
  if (filterRedList.length === 0) {
    return (
      <div className="flex items-center justify-center h-100">
        <h2 className="text-4xl font-bold">Not found Read list data</h2>
      </div>
    );
  }

  return (
    <section>
      <div className="grid grid-cols-3 gap-10 mt-10">
        {filterRedList.map((book, ind) => (
          <BookCard key={ind} book={book} />
        ))}
      </div>
    </section>
  );
};

export default ListedReadList;
