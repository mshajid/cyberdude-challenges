const FormInputs = ({ id, type, placeholder, label, register }) => {
  return (
    <div className="flex flex-col gap-y-1">
      <label className="font-semibold tracking-wider" htmlFor={id}>
        {label}
      </label>
      <input
        name={id}
        id={id}
        type={type}
        placeholder={placeholder}
        className="rounded-sm outline-none px-2 py-1.5 w-72 bg-gray-500 text-white text-sm"
        register = {register}
      />
    </div>
  );
};

export default FormInputs;
