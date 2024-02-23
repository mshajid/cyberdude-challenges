import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

// const [badulla, setBadulla] = useState([]);

// async function getData() {
//   const querySnapshot = await getDocs(collection(db, "Badulla"));
//   console.log(querySnapshot);
// }
// getData();

const Submenus = () => {
  return (
    <div className="flex gap-x-5">
      <div className="max-w-[220px] bg-gradient-to-r from-slate-900 to-slate-700 h-20 flex items-center px-2 justify-start gap-x-2 rounded-md">
        <img
          className="size-14 rounded-full object-cover"
          src="https://www.sankileisure.com/wp-content/uploads/2020/07/demodara-bridge.jpg"
        />
        <span className="text-[16px] font-medium text-white tracking-wide">
          <Link to={"/badulla"}>Badulla</Link>
        </span>
        <svg
          className="hover:text-red-500 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="1.3em"
          height="1.3em"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M16.15 13H5q-.425 0-.712-.288T4 12q0-.425.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375q0 .2-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
          ></path>
        </svg>
      </div>
      <div className="max-w-[220px] bg-gradient-to-r from-slate-900 to-slate-700 h-20 flex items-center justify-start px-2 gap-x-2 rounded-md">
        <img
          className="size-14 rounded-full object-cover"
          src="https://www.shutterstock.com/image-photo/view-colombo-city-skyline-modern-600nw-1887281944.jpg"
        />
        <span className="text-[16px] font-medium text-white tracking-wide">
          <Link to={"/colombo"}>Colombo</Link>
        </span>
        <svg
          className="hover:text-red-500 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="1.3em"
          height="1.3em"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M16.15 13H5q-.425 0-.712-.288T4 12q0-.425.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375q0 .2-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
          ></path>
        </svg>
      </div>
      <div className="max-w-[220px] bg-gradient-to-r from-slate-900 to-slate-700 h-20 flex items-center justify-start px-2 gap-x-2 rounded-md">
        <img
          className="size-14 rounded-full object-cover"
          src="https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/09/og-image-for-trincomalee-tourist-attractions.jpg"
        />
        <span className="text-[16px] font-medium text-white tracking-wide">
          <Link to={"/trincomalee"}>Trincomalee</Link>
        </span>
        <svg
          className="hover:text-red-500 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="1.3em"
          height="1.3em"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M16.15 13H5q-.425 0-.712-.288T4 12q0-.425.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375q0 .2-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
          ></path>
        </svg>
      </div>
      <div className="max-w-[220px] bg-gradient-to-r from-slate-900 to-slate-700 h-20 flex items-center justify-start px-2 gap-x-2 rounded-md">
        <img
          className="size-14 rounded-full object-cover"
          src="https://www.ugaescapes.com/ugabay/wp-content/uploads/sites/4/2017/07/batticaloa-lagoon-1.jpg"
        />
        <span className="text-[16px] font-medium text-white tracking-wide">
          <Link to={"/batticaloa"}>Batticaloa</Link>
        </span>
        <svg
          className="hover:text-red-500 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="1.3em"
          height="1.3em"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M16.15 13H5q-.425 0-.712-.288T4 12q0-.425.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375q0 .2-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
          ></path>
        </svg>
      </div>
      <div className="max-w-[220px] bg-gradient-to-r from-slate-900 to-slate-700 h-20 flex items-center justify-start px-2 gap-x-2 rounded-md">
        <img
          className="size-14 rounded-full object-cover"
          src="https://www.srilankainstyle.com/storage/app/media/uploaded-files/7-reasons-to-visit-kandy-in-sri-lanka-slider-1.jpg"
        />
        <span className="text-[16px] font-medium text-white tracking-wide">
          <Link to={"/kandy"}>Kandy</Link>
        </span>
        <svg
          className="hover:text-red-500 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="1.3em"
          height="1.3em"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M16.15 13H5q-.425 0-.712-.288T4 12q0-.425.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375q0 .2-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Submenus;
