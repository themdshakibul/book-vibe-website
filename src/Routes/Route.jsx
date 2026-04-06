import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout.";
import HomePage from "../Pages/HomePage/HomePage";
import Books from "../Pages/Books/Books";
import ErrorPage from "../Pages/ErroPages/ErrorPage";
import BookDetails from "../Pages/BookDetailsPage/BookDetails";


export const route = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/books",
        Component: Books,
      },
      {
        path: "/bookdetails/:bookId",
        Component: BookDetails,
        loader: () => fetch("/booksData.json")
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
