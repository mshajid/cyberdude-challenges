import { Link } from "react-router-dom";
import Submenus from "../Components/Submenus";

const HomePage = () => {
  return (
    <div className="space-y-2 px-2 py-4">
      <h2 className="text-3xl font-semibold tracking-wide">
        Popular Districts In Sri Lanka For Tourism
      </h2>
      <Submenus />
    </div>
  );
};

export default HomePage;
