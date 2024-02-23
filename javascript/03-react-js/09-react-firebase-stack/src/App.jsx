import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Submenus from "./Components/Submenus";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
