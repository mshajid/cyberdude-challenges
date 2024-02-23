const FormSelect = ({ label, name, register }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <select name={name} className="px-2 py-1 rounded outline-none text-sm" {...register}>
        <option value={""}>-- Districts Starts Here --</option>
        <option value={"colombo"}>Colombo 🏙️</option>
        <option value={"trincomalee"}>Trincomalee 🌴</option>
        <option value={"batticaloa"}>Batticaloa 🌞</option>
        <option value={"badulla"}>Badulla ⛰️</option>
        <option value={"kandy"}>Kandy 😎</option>
        <option value={"nuwara-eliya"}>Nuwara Eliya 🥶</option>
      </select>
    </div>
  );
};
export default FormSelect;
