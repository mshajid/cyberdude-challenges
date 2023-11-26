const brandsData = [
    { brand: "samsung", model: "A31" },
    { brand: "samsung", model: "A51" },
    { brand: "samsung", model: "S22 Ultra" },
    { brand: "samsung", model: "Flip5" },
    { brand: "apple", model: "iPhone 12" },
    { brand: "apple", model: "iPhone 13 PRO" },
    { brand: "apple", model: "iPhone 15" },
    { brand: "apple", model: "iPhone 15 PRO" },
  ];
  
  console.warn(
    "Currently We have A51, S22 Ultra, A31, Flip5 In Samsung Category"
  );
  console.warn(
    "Currently We have iPhone 15 PRO, iPhone 15, iPhone 13 PRO, In Apple Category"
  );
  
  const select = "samsung";
  const selectTwo = "apple";
  const selectModel = prompt("Select Your Phone Model? ");
  
  const findSamsung = brandsData
    .filter(function (value) {
      return value.brand === select;
    })
    .find(function (value) {
      return value.model === selectModel;
    });
  
  const findApple = brandsData
    .filter(function (value) {
      return value.brand === selectTwo;
    })
    .find(function (value) {
      return value.model === selectModel;
    });
  
  if (findSamsung || findApple) {
    console.log(`${selectModel}, That's a good model for you`);
  } else {
    console.log("We don't have the current model on our stock yet.");
  }