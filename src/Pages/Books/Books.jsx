import React, { useContext } from "react";
import { BookContext } from "../../Context/BookProveider";

function Books() {
  const { storedBooks, wishList } = useContext(BookContext);

  return (
    <section>
      <div>
        Read List : {storedBooks.length}
        Wish List : {wishList.length}
      </div>
    </section>
  );
}

export default Books;
