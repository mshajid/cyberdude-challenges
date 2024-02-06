const CardsButton = ({ label }) => {
  return (
    <div className="mt-2 mb-5 mx-5">
      <button className="text-sm bg-zinc-400 px-5 py-1 rounded-md text-zinc-950 hover:bg-zinc-600 hover:text-white transition-all">
        {label}
      </button>
    </div>
  );
};

export default CardsButton;
