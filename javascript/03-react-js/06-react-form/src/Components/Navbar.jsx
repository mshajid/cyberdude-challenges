const Navbar = () => {
  return (
    <div className="bg-slate-500 py-2 px-5 flex justify-between items-center">
      <div>
        <h2 className="font-semibold text-xl text-white">React Form</h2>
      </div>
      <div className="flex gap-x-2">
        <span className="bg-slate-800 hover:bg-slate-950 px-2 py-1 rounded-md text-white text-sm cursor-pointer">
          GitHub Logo
        </span>
        <span className="bg-slate-800 hover:bg-slate-950 px-2 py-1 rounded-md text-white text-sm cursor-pointer">
          Profile
        </span>
      </div>
    </div>
  );
};

export default Navbar;
