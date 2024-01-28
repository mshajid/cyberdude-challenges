import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mx-2 max-w-6xl lg:mx-auto bg-[#222831] py-2 rounded-lg shadow-lg shadow-black/10">
      <header className="text-center justify-center sm:flex sm:items-center sm:justify-between px-10 py-2">
        <Link to={"/"}>
          <h2 className="text-white text-3xl tracking-wider font-semibold">😎 Shajid Shafee</h2>
        </Link>
        <ul className="flex justify-center mt-2 sm:flex gap-x-4 text-[#D9D9D9] text-lg">
          <li
            className="hover:text-white cursor-pointer text-[15px]"
            title="go to home"
          >
            <Link to={"/"}>Home</Link>
          </li>
          <li
            className="hover:text-white cursor-pointer text-[15px]"
            title="go to My Coding Journey"
          >
            <Link to={"/coding-journey"}>My Coding Journey</Link>
          </li>
          <li
            className="hover:text-white cursor-pointer text-[15px]"
            title="go to Shajid's GitHub"
          >
            <a target="_blank" href="https://github.com/mshajid">GitHub</a>
          </li>
        </ul>
      </header>
      <div className="h-[2px] mx-10 my-5 bg-white w-fullrounded-lg"></div>
      <div className="sm:px-10 text-center sm:text-left text-white sm:text-3xl font-bold tracking-[0.4em] mb-4">
        From HTML to REACT 🚀
      </div>
    </div>
  );
};

export default Navbar;
