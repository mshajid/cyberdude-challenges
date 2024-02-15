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
        <Product
          imageURL={
            "https://m.media-amazon.com/images/I/61MLAsO1K2L._AC_SX679_.jpg"
          }
          productTitle={"Keychron K3 PRO 75% Layout"}
          productDesc={"Ultra Slim Wireless Custom Hot Swappable Mechanical Keyboard"}
          price={100}
        />
        <Product
          imageURL={
            "https://m.media-amazon.com/images/I/61go630K94L._AC_SX679_.jpg"
          }
          productTitle={"Sony Pulse 3D PS Headset"}
          productDesc={"A wireless headset fine-tuned for 3D audio on PS5 Consoles."}
          price={100}
        />
      </div>
    </>
  );
};

export default App;
