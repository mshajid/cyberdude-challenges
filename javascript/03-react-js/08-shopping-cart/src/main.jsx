import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./Components/Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="font-fredoka">
    <Navbar />
    <App />
  </div>
);
