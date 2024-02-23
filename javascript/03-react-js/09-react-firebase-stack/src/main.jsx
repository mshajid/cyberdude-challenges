import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import AddPlace from "./Pages/AddPlace.jsx";
import Badulla from "./Pages/Badulla.jsx";
import Colombo from "./Pages/Colombo.jsx";
import Trincomalee from "./Pages/Trincomalee.jsx";
import Kandy from "./Pages/Kandy.jsx";
import NuwaraEliya from "./Pages/NuwaraEliya.jsx";
import Batticaloa from "./Pages/Batticaloa.jsx";

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
      },
      {
        path: "/colombo",
        element: <Colombo />
      },
      {
        path: "/trincomalee",
        element: <Trincomalee />
      },
      {
        path: "/kandy",
        element: <Kandy />
      },
      {
        path: "/nuwara-eliya",
        element: <NuwaraEliya />
      },
      {
        path: "/batticaloa",
        element: <Batticaloa />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="font-Jakarta">
    <RouterProvider router={router} />
  </div>
);
