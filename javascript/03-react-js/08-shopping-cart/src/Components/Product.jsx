const Product = ({
  imageURL,
  productTitle,
  productDesc,
  usage = "New",
  price,
}) => {
  return (
    <>
      <div>
        <div>
          <img src={imageURL} />
        </div>
        <div>
          <h3 className="text-lg font-semibold tracking-wide">
            {productTitle}
          </h3>
          <span>{productDesc}</span>
          <div className="flex items-center gap-x-2">
            <span className="text-3xl tracking-normal font-medium">
              ${price}
            </span>
            <span className="px-2 py-0.5 bg-red-500 text-white rounded text-xs">
              {usage}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-x-5">
          <span className="px-2 bg-red-500 text-lg rounded-md">+</span>
          <span className="text-xl font-medium">0</span>
          <span className="px-2 bg-red-500 text-lg rounded-md">-</span>
        </div>
      </div>
    </>
  );
};

export default Product;
