import React, { useContext } from "react";
import { BookContext } from "../../Context/BookProveider";

function Books() {
  const { storedBooks } = useContext(BookContext);
  console.log(storedBooks);

  return <div>Books</div>;
}

export default Books;
