import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "./Sidebar";
import Footer from "../components/Footer";

const GeneralLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <div className="lg:flex flex-row p-2 lg:p-0">
          <div className="max-w-4xl">
            <Outlet />
          </div>
          <div className="sm:max-w-2xl">
            <Sidebar />
          </div>
        </div>
        <div>
            <Footer />
          </div>
      </div>
    </div>
  );
};

export default GeneralLayout;
