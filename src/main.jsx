import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { route } from "./Routes/Route";
import { RouterProvider } from "react-router";
import "./index.css";
import BookProveider from "./Context/BookProveider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookProveider>
      <RouterProvider router={route} />
    </BookProveider>
  </StrictMode>,
);
