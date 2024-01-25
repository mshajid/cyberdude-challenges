import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const GeneralLayout = () => {
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <Outlet />
    </>
  );
};

export default GeneralLayout;
