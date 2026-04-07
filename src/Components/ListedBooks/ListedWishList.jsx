import React, { useContext, useEffect, useState } from "react";
import BookCard from "../Ui/BookCard";
import { BookContext } from "../../Context/BookProveider";

const ListedWishList = ({ sortingType }) => {
  const { wishList } = useContext(BookContext);

  const [filterWishList, setFilterWishList] = useState(wishList);

  useEffect(() => {
    if (sortingType) {
      if (sortingType === "pages") {
        const sortedData = [...wishList].sort((a, b) => a.pages - b.pages);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setFilterWishList(sortedData);
      } else if (sortingType === "reating") {
        const sortedData = [...wishList].sort((a, b) => a.rating - b.rating);
        setFilterWishList(sortedData);
      }
    }
  }, [sortingType, wishList]);

  if (filterWishList.length === 0) {
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
          {filterWishList.map((book, ind) => (
            <BookCard key={ind} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListedWishList;
