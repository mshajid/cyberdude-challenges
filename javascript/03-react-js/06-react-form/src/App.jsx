import React from "react";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-lg mx-auto my-24">
        <Form />
      </div>
    </>
  );
};

export default App;
