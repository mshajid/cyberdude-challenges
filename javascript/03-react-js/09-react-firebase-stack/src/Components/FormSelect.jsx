const FormSelect = ({ label, name, register }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <select name={name} className="px-2 py-1 rounded outline-none text-sm" {...register}>
        <option value={""}>-- Districts Starts Here --</option>
        <option value={"Colombo"}>Colombo 🏙️</option>
        <option value={"Trincomalee"}>Trincomalee 🌴</option>
        <option value={"Batticaloa"}>Batticaloa 🌞</option>
        <option value={"Badulla"}>Badulla ⛰️</option>
        <option value={"Kandy"}>Kandy 😎</option>
        <option value={"Nuwara-eliya"}>Nuwara Eliya 🥶</option>
      </select>
    </div>
  );
};
export default FormSelect;
