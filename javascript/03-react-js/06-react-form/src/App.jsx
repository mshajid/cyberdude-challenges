import React from "react";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-[90vh] justify-center items-start overflow-hidden my-10">
        <Form />
      </div>
    </>
  );
};

export default App;
