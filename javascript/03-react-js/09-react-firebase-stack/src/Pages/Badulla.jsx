import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

const Badulla = () => {
  const [districts, setDistricts] = useState([]);


  const handleDelete = async (data) => {
    const docRef = await deleteDoc(doc(db, "Badulla", data.id));
    // const newList = districts.filter((place) => {
    //   return data !== place;
    // });
  };


  useEffect(() => {
    async function getDataFromFirebase() {
      const querySnapshot = await getDocs(collection(db, "Badulla"));
      console.log(querySnapshot)
      const mappedData = querySnapshot.docs.map((doc) => {
        // * Trying deStrcuturing the inside contents.
        // const { id, ...getData } = doc.data();
        // return {
        //   id,
        //   ...getData,
        // };

        const getID = doc.id;
        const getDocs = doc.data();
        const mergedData = { id: getID, ...getDocs };
        return mergedData;
      });
      setDistricts(mappedData);
    }
    getDataFromFirebase();
  }, [handleDelete]);

  
  return (
    <div className="flex gap-x-2">
      {districts?.map((district, index) => {
        return (
          <>
            <div
              key={index}
              id={district.id}
              className="bg-gray-300 max-w-xs h-[350px] leading-4 text-sm rounded-md"
            >
              <div className="relative">
                <img
                  className="h-36 w-full object-cover"
                  src={district.addImage}
                />
                <h1 className="absolute bottom-0 bg-white font-bold tracking-wide text-[20px] p-2">
                  {district.favoritePlace.toUpperCase()}
                </h1>
              </div>
              <div className="flex flex-col gap-y-3 p-2">
                <ul className="flex flex-col gap-y-1">
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
                  <p className="font-semibold flex flex-col h-10">
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

              {/* Either way I need to create a separeate del/upd button component */}
              <div className="flex gap-x-2 px-2">
                <button
                  onClick={() => handleDelete(district)}
                  className="bg-rose-400 hover:bg-rose-600 transition-all px-2 py-1 text-white rounded"
                >
                  Delete Place
                </button>

                <button className="bg-emerald-400 hover:bg-emerald-600 transition-all px-2 py-1 text-white rounded">
                  Update Place
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Badulla;
