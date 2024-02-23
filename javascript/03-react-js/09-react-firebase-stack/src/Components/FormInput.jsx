const FormInput = ({ name, placeholder, label, register }) => {
  return (
    <div>
      <label className="font-medium flex flex-col gap-y-0.5" htmlFor={name}>
        {label}
        <input
          name={name}
          placeholder={placeholder}
          className="w-full px-2 outline-none text-sm py-1.5 bg-gray-100"
          {...register}
        />
      </label>
    </div>
  );
};

export default FormInput;
