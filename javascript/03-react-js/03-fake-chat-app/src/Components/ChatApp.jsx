import { useState } from "react";

const ChatApp = () => {
  const [name, setName] = useState("Enter Your Name");

  function changeName(e) {
    setName(e.target.value)
  }

  return (
    <div className="flex justify-between p-10">
      <div>
        <input
          onChange={changeName}
          placeholder="Change Contact Name"
          className="px-2 text-sm py-0.5 bg-teal-500"
        />
      </div>

      {/* // Chat App UI Starts Here */}
      <div className="w-[800px]">
        <div className="max-w-md bg-teal-800 px-3 py-1.5">
          <div className="flex justify-between text-sm text-white">
            <div>
              <span>17:48</span>
            </div>
            <div className="flex gap-x-2">
              <div>
                <span>LTE</span>
              </div>
              <div className="flex items-center gap-x-1">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2em"
                    height="1.2em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M5 20v-6h3v6zm6 0V9h3v11zm6 0V4h3v16z"
                    ></path>
                  </svg>
                </div>
                <span>80%</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="m7.85 13l2.85 2.85q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L4.7 12.7q-.3-.3-.3-.7t.3-.7l4.575-4.575q.3-.3.713-.287t.712.312q.275.3.288.7t-.288.7L7.85 11H19q.425 0 .713.288T20 12q0 .425-.288.713T19 13z"
                ></path>
              </svg>
              <img
                className="w-12 rounded-full object-cover"
                src="https://shajid-blog-react.netlify.app/assets/Shajid-E393mccF.png"
              />
              <span className="text-lg font-bold text-white tracking-wide">
                {name}
              </span>
            </div>
            <div className="flex gap-x-6 text-sm">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h12q.825 0 1.413.588T18 6v4.5l3.15-3.15q.25-.25.55-.125t.3.475v8.6q0 .35-.3.475t-.55-.125L18 13.5V18q0 .825-.587 1.413T16 20z"
                  ></path>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
                  ></path>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-md bg-[#ddd4cd] h-[500px] py-5 px-3">
          <div className="relative text-xs  bg-white w-fit text-pretty rounded-bl-lg rounded-br-lg rounded-tr-lg px-3 py-1">
            <span>
              Example of your texts
              <span className="ml-2 text-[8px]">2:14 PM</span>
            </span>
            <div className="absolute top-0 -left-2 -z-2">
              <svg
                viewBox="0 0 8 13"
                height="13"
                width="8"
                preserveAspectRatio="xMidYMid meet"
                version="1.1"
                x="0px"
                y="0px"
              >
                <path
                  opacity="0.13"
                  fill="red"
                  d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"
                ></path>
                <path
                  fill="white"
                  d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="relative text-xs float-right bg-white w-fit text-pretty rounded-bl-lg rounded-br-lg rounded-tl-lg px-3 py-1">
            <span>
              Example of your texts
              <span className="ml-2 text-[8px]">2:14 PM</span>
            </span>
            <div className="absolute top-0 -right-2 z-1">
              <svg
                viewBox="0 0 8 13"
                height="13"
                width="8"
                preserveAspectRatio="xMidYMid meet"
                version="1.1"
                x="0px"
                y="0px"
                enable-background="new 0 0 8 13"
                xml:space="preserve"
              >
                <path
                  opacity="0.13"
                  d="M5.188,1H0v11.193l6.467-8.625 C7.526,2.156,6.958,1,5.188,1z"
                ></path>
                <path
                  fill="white"
                  d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
