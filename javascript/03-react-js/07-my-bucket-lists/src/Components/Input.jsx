const Input = ({ placeholder, name, register }) => {
  return (
    <>
      <div className="bg-red-500">
        <input placeholder={placeholder} name={name}/>
      </div>
    </>
  );
};

export default Input;
