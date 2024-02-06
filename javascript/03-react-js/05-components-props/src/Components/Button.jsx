import React from "react";

const Button = ({ variant }) => {
  const variants = {
    Primary: "bg-violet-500 text-white px-2 py-1",
    Secondary: "bg-red-500 text-white px-2 py-1",
    Success: "bg-red-500 text-white px-2",
    Warning: "bg-red-500 text-white px-2",
    Danger: "bg-red-500 text-white px-2",
    Info: "bg-red-500 text-white px-2",
    Light: "bg-red-500 text-white px-2",
    Dark: "bg-red-500 text-white px-2",
  };
  return (
    <>
      <button className={variants[variant]}>{variant} Button</button>
    </>
  );
};

export default Button;
