const Input = ({ placeholder, name, register }) => {
  return (
    <>
      <div>
        <input
          className="px-2 py-1.5 bg-[#93A8AC] w-full outline-none placeholder:text-gray-200 rounded-md"
          placeholder={placeholder}
          name={name}
          {...register}
        />
      </div>
    </>
  );
};

export default Input;
