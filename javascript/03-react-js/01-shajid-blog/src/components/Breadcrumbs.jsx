import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      console.log(crumb);
      currentLink = +`/${crumb}`;
      return (
        <div className="inline-flex mx-1" key={crumb}>
          <div className="flex items-center justify-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path fill="white" d="M10 17V7l5 5z"></path>
              </svg>
            </div>
            <Link to={currentLink}>{crumb}</Link>
          </div>
        </div>
      );
    });

  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 px-5 py-2 flex text-[9px] mx-2 md:text-[13px] md:flex md:mx-2 lg:text-sm w-fit text-white rounded-md lg:flex justify-start mt-2">
      <span>
        You're at <span className="mx-2">{crumbs == "" ? "Homepage" : ""}</span>
      </span>
      {crumbs}
    </div>
  );
};

export default Breadcrumbs;
