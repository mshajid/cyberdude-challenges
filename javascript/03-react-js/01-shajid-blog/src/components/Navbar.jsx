import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-6xl mx-auto bg-[#222831] py-2 rounded-lg shadow-lg shadow-black/10">
      <header className="flex items-center justify-between px-10 py-2">
        <h2 className="text-white text-3xl">Shajid</h2>
        <ul className="flex gap-x-4 text-[#D9D9D9] text-lg">
          <li className="hover:text-white cursor-pointer" title="go to home">
            <Link to={"/"}>Home</Link>
          </li>
          <li
            className="hover:text-white cursor-pointer"
            title="go to My Coding Journey"
          >
            <Link to={"/coding-journey"}>My Coding Journey</Link>
          </li>
          <li
            className="hover:text-white cursor-pointer"
            title="go My VSCode Settings"
          >
            <Link to={"/vscode-settings"}>My VSCode Settings</Link>
          </li>
          <li
            className="hover:text-white cursor-pointer"
            title="go to Learning Tips"
          >
            <Link to={"/learning-tips"}>Learning Tips</Link>
          </li>
          <li
            className="hover:text-white cursor-pointer"
            title="go to Shajid's GitHub"
          >
            <Link>GitHub</Link>
          </li>
        </ul>
      </header>
      <div className="h-[2px] mx-10 my-5 bg-white w-fullrounded-lg"></div>
      <div className="px-10 text-white text-3xl font-bold tracking-[0.4em] mb-4">
        From HTML to REACT 🚀
      </div>
    </div>
  );
};

export default Navbar;
