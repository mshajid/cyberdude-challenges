import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Submenus from "./Components/Submenus";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
