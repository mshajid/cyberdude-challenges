const Navbar = () => {
  return (
    <>
      <div className="bg-[#36393e] py-3 px-5 flex items-center justify-between border-b-2 border-b-blue-400">
        <h2 className="text-2xl text-white font-bold">BuckWish</h2>
        <div className="flex gap-x-5 text-white">
          <span className="hover:text-sky-500 cursor-pointer">Home</span>
          <a
            className="hover:text-sky-500 cursor-pointer"
            target="_blank"
            href="https://github.com/mshajid/cyberdude-challenges/tree/main/javascript/03-react-js/07-my-bucket-lists"
          >
            GitHub
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
