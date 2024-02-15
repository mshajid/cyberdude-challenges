const Button = ({ label }) => {
  return (
    <div>
      <button className="bg-[#424549]/100 px-5 py-1.5 rounded-md my-1 text-white/50 trnsition-all w-36 h-9 hover:text-white hover:bg-[#282b30]">
        {label}
      </button>
    </div>
  );
};

export default Button;
