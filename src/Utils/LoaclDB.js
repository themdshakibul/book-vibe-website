// Read list to local storage
const getAllReadListFormLocalDB = () => {
  const allReadList = localStorage.getItem("readList");

  if (allReadList) {
    return JSON.parse(allReadList);
  }
  return [];
};

const addReadListToLocalDB = (books) => {
  const allBooks = getAllReadListFormLocalDB();

  const isAlradyExist = allBooks?.find(
    (book) => book?.bookId === books?.bookId,
  );

  //   true --> false
  if (!isAlradyExist) {
    //  ai data ta local DB te Add korte chai
    allBooks.push(books);
    localStorage.setItem("readList", JSON.stringify(allBooks));
  }
};

// Add Wish list

const getAllWishListFormLocalDB = () => {
  const allWishList = localStorage.getItem("wishlist");
  if (allWishList) {
    return JSON.parse(allWishList); // data gula ke jeson a convart kore
  }
  return [];
};

const addWishListFormLocalDB = (wish) => {
  const allwish = getAllWishListFormLocalDB();

  const isAlradyExist = allwish.find((wh) => wh.bookId === wish.bookId);

  if (!isAlradyExist) {
    allwish.push(wish);
    localStorage.setItem("wishlist", JSON.stringify(allwish));
  }
};

// export file
export {
  getAllReadListFormLocalDB,
  addReadListToLocalDB,
  getAllWishListFormLocalDB,
  addWishListFormLocalDB,
};
