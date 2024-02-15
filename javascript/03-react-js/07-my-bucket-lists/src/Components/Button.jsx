const Button = ({ label }) => {
  return (
    <div>
      <button className="bg-[#9B6A6C]/60 px-5 py-1.5 rounded-md my-1 text-white trnsition-all w-36 h-9 hover:border hover:border-gray-200 hover:bg-[#9B6A6C]/100">
        {label}
      </button>
    </div>
  );
};

export default Button;
