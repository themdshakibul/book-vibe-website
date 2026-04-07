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

// export file
export { getAllReadListFormLocalDB, addReadListToLocalDB };
