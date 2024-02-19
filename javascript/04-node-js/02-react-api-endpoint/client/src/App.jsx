import { useEffect } from "react";
import InternCard from "./Components/InternCard";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await fetch("/data");
      const convertData = await fetchedData.json();
      setData(convertData);
      console.log(convertData);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1 className="bg-red-500 px-5 py-1 text-white">Interns Details</h1>
      {data.length === 0 ? <div>No Data Available Right Now </div> : ""}
      <div>
        {data.map((intern) => {
          return (
            <InternCard key={intern.id} internName={intern.name} country={intern.country} />
          );
        })}
      </div>
    </>
  );
};

export default App;
