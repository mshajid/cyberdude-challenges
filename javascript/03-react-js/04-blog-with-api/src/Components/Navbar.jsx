const Navbar = () => {
  return (
    <div className="bg-[#735751] py-5 text-lg flex items-center px-10">
      <div className="flex-1">
        <h2 className="text-4xl font-bold text-white tracking-wide drop-shadow-lg shadow-black">Dummy Blog With API</h2>
      </div>
      <div className="flex gap-x-5 text-lg text-white tracking-wide">
        <a href="#" className="hover:text-[#A78A7F] hover:drop-shadow-sm hover:shadow-black">Home</a>
        <a href="#" className="hover:text-[#A78A7F] hover:drop-shadow-sm hover:shadow-black">About Us</a>
        <a href="#" className="hover:text-[#A78A7F] hover:drop-shadow-sm hover:shadow-black">Contact Us</a>
      </div>
    </div>
  );
};

export default Navbar;
