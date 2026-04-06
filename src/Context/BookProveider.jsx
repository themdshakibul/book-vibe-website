import { Children, createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const BookContext = createContext();

const BookProveider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState([]);

  const handelMarkRead = (currentBook) => {
    // Step 1 : Store bookId or store book Objects
    // Step 2 : Where to store
    // Step 3 : array or collection
    // Step 4 : if the book is alrady exist then show a alart toast
    // Step 5 : if not then add the book in the array or collection

    const isExistingBook = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistingBook) {
      alert("The book is already exist");
    } else {
      setStoredBooks([...storedBooks, currentBook]);
      alert(`${currentBook.bookName} is added to list`);
    }
    console.log(currentBook, storedBooks, "Book");
  };

  const data = {
    storedBooks,
    setStoredBooks,
    handelMarkRead,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProveider;
