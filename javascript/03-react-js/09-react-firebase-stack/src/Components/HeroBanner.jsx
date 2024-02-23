import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <>
      <div className="bg-red-500">
        <div className="relative">
          <img
            className="object-cover w-full h-96 relative"
            src="https://images.pexels.com/photos/2937148/pexels-photo-2937148.jpeg?cs=srgb&dl=pexels-shaani-sewwandi-2937148.jpg&fm=jpg"
          />

          <div className="absolute top-0 left-0 px-3 py-10 flex flex-col items-start h-96 gap-y-4">
            <h2 className="text-4xl font-bold">Travel With Us <br/> Today</h2>
            <span className="text-sm font-bold tracking-wide max-w-sm leading-5 text-[#001233] shadow-black drop-shadow-2xl">We've helped 1000+ tourists every summer to have their destination that breahtaking. Don't forget to help other tourists to add your favorite place in Sri Lanka.</span>
          </div>

          <div className="flex absolute bottom-0 p-3 gap-x-3">
            <Link to={"/add-place"} className="w-[320px] h-32 bg-[#002855]/80 hover:bg-[#002855] rounded-md transition-all px-1">
              <div className="flex flex-col justify-center items-start h-32 p-4">
                <h2 className="text-2xl text-white font-semibold">
                  Submit Your <br />
                  Favorite Place
                </h2>
                <em className="text-gray-200 text-sm">Hassle free, Make your next move</em>
              </div>
            </Link>
            <Link to={"/add-place"} className="w-[320px] h-32 bg-[#002855]/80 hover:bg-[#002855] rounded-md transition-all px-1">
              <div className="flex flex-col justify-center items-start h-32 p-2">
                <h2 className="text-2xl text-white font-semibold">
                  Make Your <br />
                  Trip Remember
                </h2>
                <em className="text-gray-200 text-sm">Destination that equals to wonders</em>
              </div>
            </Link>
            <Link to={"/add-place"} className="w-[320px] h-32 bg-[#002855]/80 hover:bg-[#002855] rounded-md transition-all px-1">
              <div className="flex flex-col justify-center items-start h-32 p-2">
                <h2 className="text-2xl text-white font-semibold">
                  Budget Friendly <br />
                  0% Expensive
                </h2>
                <em className="text-gray-200 text-sm">Unless, you move to expensive.</em>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;

{
  /* <div className="max-w-full flex items-end h-[480px] justify-end gap-x-2">
  <div className="w-[250px] h-[150px] bg-blue-500 rounded-md">
    adads
  </div>
  <div className="w-[250px] h-[150px] bg-violet-500 rounded-md">
    asdasds
  </div>
  <div className="w-[250px] h-[150px] bg-violet-500 rounded-md">
    asdasds
  </div>
  <div className="w-[250px] h-[150px] bg-violet-500 rounded-md">
    asdasds
  </div>
</div> */
}
