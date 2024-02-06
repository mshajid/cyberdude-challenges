import React from "react";

const Button = ({ variant }) => {
  const variants = {
    Primary:
      "bg-violet-400/20 text-violet-900 px-2 py-1 rounded-md border border-violet-500 hover:bg-violet-400 hover:text-white transition-all",
    Secondary: "bg-red-500 text-white px-2 py-1 rounded-md",
    Success: "bg-red-500 text-white px-2 py-1 rounded-md",
    Warning: "bg-red-500 text-white px-2 py-1 rounded-md",
    Danger: "bg-red-500 text-white px-2 py-1 rounded-md",
    Info: "bg-red-500 text-white px-2 py-1 rounded-md",
    Light: "bg-red-500 text-white px-2 py-1 rounded-md",
    Dark: "bg-red-500 text-white px-2 py-1 rounded-md",
  };
  return (
    <>
      <button className={variants[variant]}>{variant} Button</button>
    </>
  );
};

export default Button;
