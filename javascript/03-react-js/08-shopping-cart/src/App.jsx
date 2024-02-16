import { useEffect, useState } from "react";
import Product from "./Components/Product";

const App = () => {
  const [productValue, setProductValue] = useState([]);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const sum = productValue.reduce((total, current) => {
      return total + current;
    }, 0);
    setTotal(sum);
  }, [productValue, setProductValue]);

  const handleTotal = (data, index) => {
    const currentValue = productValue;
    currentValue[index] = data;
    setProductValue(currentValue);
  };

  return (
    <>
      <div className="px-5 py-4">
        <h2>Total: {total}</h2>
        <Product
          imageURL={
            "https://m.media-amazon.com/images/I/51el11zcGRL._AC_AA180_.jpg"
          }
          productTitle={"Logitech MX Master 3S"}
          productDesc={"Wireless perfomance mouse with Ultra fast scrolling."}
          price={85}
          usage="Used"
          setProductValue={handleTotal}
          index={0}
        />
        <Product
          imageURL={
            "https://m.media-amazon.com/images/I/61MLAsO1K2L._AC_SX679_.jpg"
          }
          productTitle={"Keychron K3 PRO 75% Layout"}
          productDesc={
            "Ultra Slim Wireless Custom Hot Swappable Mechanical Keyboard"
          }
          price={100}
          setProductValue={handleTotal}
          index={1}
        />
        <Product
          imageURL={
            "https://m.media-amazon.com/images/I/61go630K94L._AC_SX679_.jpg"
          }
          productTitle={"Sony Pulse 3D PS Headset"}
          productDesc={
            "A wireless headset fine-tuned for 3D audio on PS5 Consoles."
          }
          price={100}
          setProductValue={handleTotal}
          index={2}
        />
        <Product
          imageURL={
            "https://m.media-amazon.com/images/I/61sV4Yo6cDL._AC_SX569_.jpg"
          }
          productTitle={"Eilik - Robot Pet"}
          productDesc={
            "Meet Eilik, Perfect interactive companion for your desk."
          }
          price={300}
          setProductValue={handleTotal}
          index={3}
        />
      </div>
    </>
  );
};

export default App;
