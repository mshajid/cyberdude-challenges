import Shajid from "../assets/shajid.jpeg";
import mySelf from "../data/myself.json";

const Header = () => {
  const mySelfComponent = mySelf.map((value) => {
    return (
      <div className="flex flex-col gap-y-3">
        <div>
          <div className="text-5xl text-white font-bold tracking-wide">
            {value.name}
          </div>
          <div className="text-2xl font-light text-[#89C2D9]">
            {value.title}
          </div>
        </div>
        <div className="text-sm text-white tracking-wide max-w-lg">
          {value.description}
        </div>
        <div className="flex gap-x-5 text-xs text-[#89C2D9]">
          <div className="flex items-center gap-x-1">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                ></path>
              </svg>
            </div>
            <div>{value.githubURL}</div>
          </div>
          <div className="flex items-center gap-x-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                ></path>
              </svg>
            </div>
            <div>{value.linkedinURL}</div>
          </div>
          <div className="flex items-center gap-x-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
                ></path>
              </svg>
            </div>
            <div>{value.contactNo}</div>
          </div>
          <div className="flex items-center gap-x-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M12 20.556q-.235 0-.47-.077q-.234-.077-.432-.25q-1.067-.98-2.163-2.185q-1.097-1.204-1.992-2.493q-.895-1.29-1.467-2.633q-.572-1.343-.572-2.622q0-3.173 2.066-5.234Q9.037 3 12 3t5.03 2.062q2.066 2.061 2.066 5.234q0 1.279-.572 2.613q-.572 1.333-1.458 2.632q-.885 1.3-1.981 2.494q-1.097 1.194-2.164 2.175q-.191.173-.434.26q-.244.086-.487.086m.003-8.825q.668 0 1.14-.476q.472-.475.472-1.143t-.475-1.14q-.476-.472-1.143-.472t-1.14.476q-.472.475-.472 1.143t.475 1.14q.476.472 1.143.472"
                ></path>
              </svg>
            </div>
            <div>{value.livesIn}</div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="bg-[#01497C] p-5 rounded-md">
      <div className="flex justify-evenly items-center">
        <img className="size-44 object-cover rounded-full" src={Shajid} />
        <div className="">{mySelfComponent}</div>
      </div>
    </div>
  );
};

export default Header;
