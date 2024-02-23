import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import AddPlace from "./Pages/AddPlace.jsx";
import Badulla from "./Pages/Badulla.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/add-place",
        element: <AddPlace />,
      },
      {
        path: "/badulla",
        element: <Badulla />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="font-Jakarta">
    <RouterProvider router={router} />
  </div>
);
