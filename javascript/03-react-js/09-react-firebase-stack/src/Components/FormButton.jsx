const FormButton = ({ label, onClick }) => {
  return (
    <>
      <button onClick={onClick} className="bg-red-500 px-2 py-1 my-2 rounded-md text-white">{label}</button>
    </>
  );
};

export default FormButton
