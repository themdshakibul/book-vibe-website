import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout.";
import HomePage from "../Pages/HomePage/HomePage";
import Books from "../Pages/Books/Books";
import ErrorPage from "../Pages/ErroPages/ErrorPage";

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
    ],
    errorElement: <ErrorPage />,
  },
]);
