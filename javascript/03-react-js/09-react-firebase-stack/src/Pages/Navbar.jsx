import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#001845] px-5 py-4 flex items-center justify-between">
        <h2 className="text-3xl font-semibold tracking-wide text-white">
          Hello Sri Lanka
        </h2>
        <div className="flex gap-x-5 items-center">
          <Link className="text-[16px] text-white" to={"/"}>Home</Link>
          <Link className="text-[16px] text-white" to={"/"}>About Us</Link>
          <Link className="text-[16px] text-white" to={"/"}>Contact Us</Link>
          <Link
            className="bg-[#0466C8] px-3 py-1 rounded-md text-white font-medium"
            to={"/add-place"}
          >
            Add Place Here
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
