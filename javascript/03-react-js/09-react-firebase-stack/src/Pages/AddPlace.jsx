import travelBg from "../assets/travel-form-bg.jpg";

const AddPlace = () => {
  return (
    <>
      <div className="relative flex justify-center items-center">
        <img className="w-full h-56 object-cover" src={travelBg} />
        <div className="text-6xl absolute font-semibold  text-white">
          Add Your Favorite Place Here 🌴🌴
        </div>
      </div>
      <div className="max-w-xl mx-auto"></div>
    </>
  );
};

export default AddPlace;
