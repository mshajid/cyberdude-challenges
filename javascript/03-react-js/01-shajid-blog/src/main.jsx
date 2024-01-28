import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GeneralLayout from "./layouts/GeneralLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import CodingJourney from "./pages/CodingJourney.jsx";
import HowTo from "./pages/HowTo.jsx";
import HowToLearn from "./pages/HowToLearn.jsx";
import CommonMistakes from "./pages/CommonMistakes.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

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
        path: "/coding-journey/how-to-be-a-dev",
        element: <HowTo />,
      },
      {
        path: "/coding-journey/learning-how-to-learn",
        element: <HowToLearn />,
      },
      {
        path: "/coding-journey/developer-mistakes-you-should-avoid",
        element: <CommonMistakes />,
      },
    ],
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-[#EEEEEE] max-w-full min-h-screen py-2 font-jakarta">
    <div className="max-w-6xl mx-auto">
      <RouterProvider router={router} />
    </div>
  </div>
);
