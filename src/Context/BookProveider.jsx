import { Children, createContext, useState } from "react";
import { toast } from "react-toastify";
import {
  addReadListToLocalDB,
  getAllReadListFormLocalDB,
  getAllWishListFormLocalDB,
} from "../Utils/LoaclDB";

// eslint-disable-next-line react-refresh/only-export-components
export const BookContext = createContext();

const BookProveider = ({ children }) => {
  const [readList, setReadList] = useState(() => getAllReadListFormLocalDB());
  const [wishList, setWishList] = useState(() => getAllWishListFormLocalDB());

  const handelMarkRead = (currentBook) => {
    // Step 1 : Store bookId or store book Objects
    // Step 2 : Where to store
    // Step 3 : array or collection
    // Step 4 : if the book is alrady exist then show a alart toast
    // Step 5 : if not then add the book in the array or collection

    addReadListToLocalDB(currentBook);

    const isExistingBook = readList.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistingBook) {
      toast.error("The book is already exist");
    } else {
      setReadList([...readList, currentBook]);
      toast.success(`${currentBook.bookName} is added to Read list`);
    }
  };

  const handelWishList = (currentBook) => {
    // Step 1 : Store bookId or store book Objects
    // Step 2 : Where to store
    // Step 3 : array or collection
    // Step 4 : if the book is alrady exist then show a alart toast
    // Step 5 : if not then add the book in the array or collection

    const isExistInReadList = readList.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistInReadList) {
      toast.error("Theis Book is already in read list");
      return;
    }

    const isExistingBook = wishList.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistingBook) {
      toast.error("The book is already exist");
    } else {
      setWishList([...wishList, currentBook]);
      toast.success(`${currentBook.bookName} is added to wish list`);
    }
    console.log(currentBook, readList, "Book");
  };

  const data = {
    readList,
    setReadList,
    handelMarkRead,
    wishList,
    setWishList,
    handelWishList,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProveider;
