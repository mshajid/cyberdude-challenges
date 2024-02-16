import { useState } from "react";

const Product = ({
  index,
  imageURL,
  productTitle,
  productDesc,
  usage = "New",
  price,
  setProductValue,
}) => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
    setProductValue((value + 1) * price, index);
    // console.log("running", index)
  };

  const handleDecrement = () => {
    setValue(value - 1);
    setProductValue((value - 1) * price, index);
  };

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between gap-x-5 border px-5 hover:bg-gray-100 transition-all hover:border-b-2 hover:border-b-slate-800/70">
        <div className="flex items-center gap-x-5">
          <div className="size-36 flex items-center">
            <img src={imageURL} />
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-wide">
              {productTitle}
            </h3>
            <span>{productDesc}</span>
            <div className="flex items-center gap-x-2">
              <span className="text-3xl tracking-normal font-medium">
                ${price}
              </span>
              {usage === "New" ? (
                <span className="px-2 py-0.5 bg-red-500 text-white rounded text-xs">
                  {usage}
                </span>
              ) : (
                <span className="px-2 py-0.5 bg-emerald-500 text-white rounded text-xs">
                  {usage}
                </span>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-x-5">
            <span
              onClick={handleIncrement}
              className="px-2 bg-slate-800 text-white hover:bg-gray-600 hover:text-white transition-all text-lg rounded-md cursor-pointer"
            >
              +
            </span>
            <span className="text-xl font-medium">{value}</span>
            <span
              onClick={handleDecrement}
              className="px-2 bg-slate-800 text-white hover:bg-gray-600 hover:text-white transition-all  text-lg rounded-md cursor-pointer"
            >
              -
            </span>
          </div>
          <div>
            <span>Total cost {value ? "$ " + price * value : ""} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
