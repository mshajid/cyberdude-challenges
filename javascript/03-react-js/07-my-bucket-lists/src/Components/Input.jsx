const Input = ({ placeholder, name, register }) => {
  return (
    <>
      <div>
        <input
          className="px-2 py-1.5 bg-[#7289da] w-80 outline-none placeholder:text-gray-200 rounded"
          placeholder={placeholder}
          name={name}
          {...register}
        />
      </div>
    </>
  );
};

export default Input;
