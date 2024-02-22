import travelBg from "../assets/travel-form-bg.jpg";

const AddPlace = () => {
  return (
    <>
      <div className="relative flex justify-center items-center">
        <img
          className="w-full h-56 object-cover brightness-75"
          src={travelBg}
        />
        <div className="absolute flex-col flex items-center justify-center gap-y-2">
          <h2 className="text-6xl font-semibold text-white">
            Add Your Favorite Place Here
          </h2>
          <span className="tracking-wide bg-red-500 px-2 py-0.5 text-white rounded-md">
            By Adding your favorite place may help our tourist to priotize their
            next adventure in Sri Lanka.
          </span>
        </div>
      </div>
      <div className="max-w-3xl mx-auto bg-gray-300 h-56">

      </div>
    </>
  );
};

export default AddPlace;
