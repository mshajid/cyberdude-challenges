import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./Components/Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="min-h-screen bg-[#1e2124] font-Jakarta">
    <Navbar />
    <App />
  </div>
);
