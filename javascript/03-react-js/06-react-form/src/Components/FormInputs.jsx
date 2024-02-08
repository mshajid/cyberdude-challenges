const FormInputs = ({
  id,
  type,
  placeholder,
  value,
  label,
  handleOnChange,
}) => {
  return (
    <div className="flex flex-col gap-y-1">
      <label htmlFor={id}>{label}</label>
      <input
        name={id}
        id={id}
        type={type}
        placeholder={placeholder}
        className="rounded-sm outline-none px-2 py-1.5 w-72 bg-gray-500 text-white"
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default FormInputs;