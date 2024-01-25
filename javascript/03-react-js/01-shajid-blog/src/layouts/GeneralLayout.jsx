import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "./Sidebar";

const GeneralLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <div className="flex">
          <div className="max-w-4xl">
            <Outlet />
          </div>
          <div className="max-w-2xl">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralLayout;