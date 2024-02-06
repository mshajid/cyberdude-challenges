const Cards = ( { type, children } ) => {
  const setWidth = {
    normal : "bg-gray-200 max-w-sm rounded-md border border-gray-400"
  }   
  return (
    <>
      <div className={setWidth[type]}>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Cards;
