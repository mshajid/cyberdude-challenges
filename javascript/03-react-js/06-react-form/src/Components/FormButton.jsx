const FormButton = ({ label }) => {
  return (
    <div>
      <button className="my-2 px-2 bg-emerald-500 py-0.5 rounded text-white hover:bg-emerald-700 transition-all">
        {label}
      </button>
    </div>
  );
};

export default FormButton;
