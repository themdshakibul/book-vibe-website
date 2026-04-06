import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { route } from "./Routes/Route";
import { RouterProvider } from "react-router";
import "./index.css";
import BookProveider from "./Context/BookProveider";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookProveider>
      <RouterProvider router={route} />
      <ToastContainer />
    </BookProveider>
  </StrictMode>,
);
