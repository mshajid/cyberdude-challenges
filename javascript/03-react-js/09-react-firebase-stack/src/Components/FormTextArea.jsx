const FormTextArea = ({ label, name, placeholder, register }) => {
  return (
    <div className="flex flex-col gap-y-1">
      <label className="font-medium" htmlFor={name}>
        {label}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        className="bg-gray-100 px-2 py-1 text-sm rows border border-black rounded-sm outline-none"
        {...register}
      ></textarea>
    </div>
  );
};

export default FormTextArea;
