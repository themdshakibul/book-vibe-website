import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { route } from "./Routes/Route";
import { RouterProvider } from "react-router";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
);
