import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    async function getDataFromFirebase() {
      const querySnapshot = await getDocs(collection(db, "badulla"));
      const mappedData = querySnapshot.docs.map((doc) => doc.data());
      setDistricts(mappedData);
    }
    getDataFromFirebase();
  }, []);

  return (
    <div className="px-5">
      <div>HomePage Is Here</div>
      {districts?.map((district) => {
        return (
          <>
            <div className="bg-gray-300 max-w-xs h-[350px] leading-4 text-sm rounded-md">
              <div className="relative">
                <img
                  className="h-36 w-full object-cover"
                  src={district.addImage}
                />
                <h1 className="absolute bottom-0 bg-white font-bold tracking-wide text-xl p-1">
                  {district.favoritePlace.toUpperCase()}
                </h1>
              </div>
              <div className="flex flex-col gap-y-3 p-2">
                <ul>
                  <li className="font-semibold flex gap-x-1">
                    District:
                    <span className="font-normal">{district.districts}</span>
                  </li>
                  <li className="font-semibold flex gap-x-1">
                    Location:{" "}
                    <span className="font-normal">{district.location}</span>
                  </li>
                  <li className="font-semibold flex gap-x-1">
                    Leisure Type:{" "}
                    <span className="font-normal">{district.leisureType}</span>
                  </li>
                </ul>
                <div>
                  <p className="font-semibold flex flex-col">
                    Review:{" "}
                    <span className="font-normal">{district.review}</span>
                  </p>
                </div>
              </div>

              <div className="flex justify-start items-start h-10 p-2">
                <p className="font-semibold flex gap-x-1">
                  Added By:{" "}
                  <span className="font-normal">{district.travelerName}</span>
                </p>
              </div>

              <div className="flex gap-x-2 px-2">
                <button className="bg-rose-400 hover:bg-rose-600 transition-all px-2 py-1 text-white rounded">
                  Delete Place
                </button>

                <button className="bg-emerald-400 hover:bg-emerald-600 transition-all px-2 py-1 text-white rounded">
                  Update Place
                </button>
              </div>

              {/* <p>{district.favoritePlace}</p>
              <p>{district.review}</p>
              <p>Location: {district.location}</p>
              <p>District: {district.districts}</p> */}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default HomePage;
