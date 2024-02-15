import { useState } from "react";

const Product = ({
  imageURL,
  productTitle,
  productDesc,
  usage = "New",
  price,
}) => {
  const [value, setValue] = useState(1);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between gap-x-5 border px-5">
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
                ${value ? price * value : price}
              </span>
              {/* <span className="px-2 py-0.5 bg-red-500 text-white rounded text-xs">
                {usage}
              </span> */}
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
        <div className="flex items-center gap-x-5">
          <span
            onClick={handleIncrement}
            className="px-2 bg-red-500 text-lg rounded-md cursor-pointer"
          >
            +
          </span>
          <span className="text-xl font-medium">{value}</span>
          <span
            onClick={handleDecrement}
            className="px-2 bg-red-500 text-lg rounded-md cursor-pointer"
          >
            -
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
