import { useEffect, useState } from "react";
import Product from "./Components/Product";

const App = () => {
  const [productValue, setProductValue] = useState([]);

  const [total, setTotal] = useState(0);

  //* UseEffect is working, but It doesn't re-rendering.
  // useEffect(() => {
  //   const sum = productValue.reduce((acc, current) => {
  //     return acc + current;
  //   }, 0);
  //   setTotal(sum);
  // }, [productValue, setProductValue]);

  const handleTotal = (data, index) => {
    const currentValue = productValue;
    currentValue[index] = data;
    //* Adding the index to the values. [index:value]
    setProductValue(currentValue);

    const sum = productValue.reduce((acc, current) => {
      return acc + current;
    }, 0);
    setTotal(sum);
  };

  return (
    <div className="max-w-4xl">
      <div className="px-5 py-4 flex flex-col gap-x-2">
        <div>
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
        <div className="bg-slate-800 text-white px-5 py-2 w-full flex gap-x-2 h-fit justify-end items-end rounded">
          <h2 className="text-xl font-bold tracking-wide">Total Checkout</h2>
          <span className="text-xl font-medium">${total}.00</span>
        </div>
      </div>
    </div>
  );
};

export default App;
