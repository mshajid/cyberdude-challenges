const FormInputs = ({ id, type = "text", placeholder, label, register, error }) => {
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
        {...register}
        className="rounded-sm outline-none px-2 py-1.5 w-72 bg-gray-500 text-white text-sm"
      />
      {error && (
        <small className="text-red-500 text-[10px] mb-2 -mt-1.5">
          {error.message}
        </small>
      )}
    </div>
  );
};

export default FormInputs;
