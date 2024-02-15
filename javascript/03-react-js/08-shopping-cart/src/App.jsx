import Product from "./Components/Product";

const App = () => {
  return (
    <>
      <div>
        <Product
          imageURL={
            "https://m.media-amazon.com/images/I/51el11zcGRL._AC_AA180_.jpg"
          }
          productTitle={"Logitech MX Master 3S"}
          productDesc={"Wireless perfomance mouse with Ultra fast scrolling."}
          price={85}
        />
      </div>
    </>
  );
};

export default App;
