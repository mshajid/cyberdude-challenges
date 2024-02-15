const Button = ({ label }) => {
  return (
    <div>
      <button className="bg-[#9B6A6C]/60 px-5 py-1 rounded-md my-1 text-white hover:bg-[#9B6A6C]/100">
        {label}
      </button>
    </div>
  );
};

export default Button;
