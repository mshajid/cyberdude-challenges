import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-yellow-500 px-5 py-2 flex items-center justify-between">
        <h2 className="text-3xl font-semibold tracking-wide">Hello Sri Lanka</h2>
        <div>
            <Link className="bg-red-500 px-3 py-1 rounded-md text-white font-medium" to={"/add-place"}>Add Place Here</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar
