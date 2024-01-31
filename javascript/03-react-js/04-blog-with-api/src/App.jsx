import { Outlet } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import Blog from "./Components/Blog";

const App = () => {
  return (
    <div className="font-robotoCondensed">
      <Blog />
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;
