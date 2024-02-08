import React from "react";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen justify-center items-center">
        <Form />
      </div>
    </>
  );
};

export default App;
