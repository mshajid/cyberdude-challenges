const HeroBanner = () => {
  return (
    <>
      <div className="bg-red-500">
        <div className="relative">
          <img
            className="object-cover w-full h-96 relative"
            src="https://images.pexels.com/photos/2937148/pexels-photo-2937148.jpeg?cs=srgb&dl=pexels-shaani-sewwandi-2937148.jpg&fm=jpg"
          />

          <div className="flex absolute bottom-0 p-3 gap-x-3">
            <div className="w-[320px] h-32 bg-red-500 rounded-md">
              <div className="flex flex-col justify-center items-start h-32 p-2">
                <h2 className="text-2xl text-white font-semibold">
                  Submit Your <br />
                  Favorite Place
                </h2>
                <span>Hassle free, Make your next move</span>
              </div>
            </div>
            <div className="w-[320px] h-32 bg-red-500 rounded-md">
              <div className="flex flex-col justify-center items-start h-32 p-2">
                <h2 className="text-2xl text-white font-semibold">
                  Submit Your <br />
                  Favorite Place
                </h2>
                <span>Hassle free, Make your next move</span>
              </div>
            </div>
            <div className="w-[320px] h-32 bg-red-500 rounded-md">
              <div className="flex flex-col justify-center items-start h-32 p-2">
                <h2 className="text-2xl text-white font-semibold">
                  Submit Your <br />
                  Favorite Place
                </h2>
                <span>Hassle free, Make your next move</span>
              </div>
            </div>
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
