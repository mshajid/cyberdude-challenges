import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-[#001845] py-10 px-10 mt-10">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-white text-2xl font-bold">Hello Sri Lanka 👋🏽</span>
            <p className="text-[#0353A4] max-w-sm text-sm">Hello SriLanka is a community driven app where everyone can add their favorite places to make tourists to finda perfect destination</p>
          </div>
          <div className="text-lg flex gap-x-3 text-[#0466C8]">
            <Link className="hover:text-white transition-all">GitHub</Link>
            <Link className="hover:text-white transition-all">Author</Link>
            <Link className="hover:text-white transition-all">References</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
