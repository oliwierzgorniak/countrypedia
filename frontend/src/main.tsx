import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root/Root";
import Country from "./routes/Country/Country";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "country/:country",
    element: <Country />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
