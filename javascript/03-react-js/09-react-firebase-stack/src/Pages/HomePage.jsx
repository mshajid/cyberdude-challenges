import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    async function getDataFromFirebase() {
      const querySnapshot = await getDocs(collection(db, "badulla"));
      const mappedData = querySnapshot.docs.map((doc) => doc.data());
      setDistricts(mappedData)
    }
    getDataFromFirebase();
  }, []);

  return (
    <div>
      <div>HomePage Is Here</div>
      {districts?.map((district) => {
        return (
          <h1>{district.districts}</h1>
        )
      })}
    </div>
  );
};

export default HomePage;
