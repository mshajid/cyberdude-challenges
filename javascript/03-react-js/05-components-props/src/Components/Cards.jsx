const Cards = ( { type, children } ) => {
  const setWidth = {
    normal : "bg-gray-200 max-w-sm h-52 rounded-md border-2 border-gray-400"
  }   
  return (
    <>
      <div className={setWidth[type]}>
        
      </div>
    </>
  );
};

export default Cards;
