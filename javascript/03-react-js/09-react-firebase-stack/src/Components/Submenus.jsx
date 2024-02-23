import { Link } from "react-router-dom";

const Submenus = () => {
  return (
    <div className="p-2 space-y-3">
      <div className="flex gap-x-2">
        <div>
          <span className="bg-red-500 px-5 py-1 rounded text-white">
            <Link to={"/badulla"}>Badulla</Link>
          </span>
        </div>
        <div>
          <span className="bg-red-500 px-5 py-1 rounded text-white">
            <Link to={"/colombo"}>Colombo</Link>
          </span>
        </div>
        <div>
          <span className="bg-red-500 px-5 py-1 rounded text-white">
            <Link to={"/trincomalee"}>Trincomalee</Link>
          </span>
        </div>
        <div>
          <span className="bg-red-500 px-5 py-1 rounded text-white">
            <Link to={"/kandy"}>Badulla</Link>
          </span>
        </div>
        <div>
          <span className="bg-red-500 px-5 py-1 rounded text-white">
            <Link to={"/nuwara-eliya"}>Nuwara Eliya</Link>
          </span>
        </div>
        <div>
          <span className="bg-red-500 px-5 py-1 rounded text-white">
            <Link to={"/batticaloa"}>Batticaloa</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Submenus;
