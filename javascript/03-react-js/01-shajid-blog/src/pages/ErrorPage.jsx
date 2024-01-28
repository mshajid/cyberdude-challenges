import { Link, useRouteError } from "react-router-dom";
import Vadivelu from "../assets/vadivelu.jpg";

const ErrorPage = () => {
  const { data, status, statusText } = useRouteError();

  return (
    <div className="bg-gradient-to-r from-rose-400 to-red-500 flex justify-center items-center min-h-screen text-white rounded-md">
      <div className="flex justify-center items-center text-center gap-x-10">
        <div>
          <img className="rounded-md" src={Vadivelu} />
        </div>

        <div className="flex-col space-y-4">
          <div>
            <span className="text-9xl font-bold">{status}</span>
          </div>
          <div>
            <span className="text-5xl font-bold">{statusText}</span>
          </div>
          <div>
            <span className="text-lg">{data}</span>
          </div>
          <div className="my-2">
            <Link className="underline tracker-wider" to={"/"}>
              Go Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
