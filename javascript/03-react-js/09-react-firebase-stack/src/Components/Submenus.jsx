import { Link } from "react-router-dom";

const Submenus = () => {
  return (
    <div className="p-2 space-y-3">
      <div className="flex gap-x-2">
        <div>
          <span className="bg-red-500 px-5 py-1 rounded text-white">
            <Link to={"/Badulla"}>Badulla</Link>
          </span>
        </div>
        <div>
          <span className="bg-red-500 px-5 py-1 rounded text-white">
            <Link to={"/Colombo"}>Colombo</Link>
          </span>
        </div>
        <div>
          <span className="bg-red-500 px-5 py-1 rounded text-white">
            <Link to={"/Trincomalee"}>Trincomalee</Link>
          </span>
        </div>
        <div>
          <span className="bg-red-500 px-5 py-1 rounded text-white">
            <Link to={"/Kandy"}>Badulla</Link>
          </span>
        </div>
        <div>
          <span className="bg-red-500 px-5 py-1 rounded text-white">
            <Link to={"/Nuwara-Eliya"}>Nuwara Eliya</Link>
          </span>
        </div>
        <div>
          <span className="bg-red-500 px-5 py-1 rounded text-white">
            <Link to={"/Batticaloa"}>Batticaloa</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Submenus;
