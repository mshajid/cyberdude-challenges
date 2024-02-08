const FormInputs = () => {
  return (
    <div className="flex flex-col gap-y-1">
      <label htmlFor="firstName">First Name</label>
      <input
        name="firstName"
        id="firstName"
        type="text"
        placeholder="Enter your first name here"
        className="rounded-sm outline-none px-2 py-1.5 w-72 bg-gray-500 text-white"
        value=""
      />
    </div>
  );
};

export default FormInputs