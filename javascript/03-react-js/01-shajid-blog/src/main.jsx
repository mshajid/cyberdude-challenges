import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GeneralLayout from "./layouts/GeneralLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import CodingJourney from "./pages/CodingJourney.jsx";
import LearningTips from "./pages/LearningTips.jsx";
import VSCodeSettings from "./pages/VSCodeSettings.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GeneralLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/coding-journey",
        element: <CodingJourney />,
      },
      {
        path: "/learning-tips",
        element: <LearningTips />,
      },
      {
        path: "/vscode-settings",
        element: <VSCodeSettings />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-[#EEEEEE] max-w-full h-screen py-2 font-jakarta">
    <div className="max-w-6xl mx-auto">
      <RouterProvider router={router} />
    </div>
  </div>
);
