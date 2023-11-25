# If-Else (Javascript Challenge)
This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> **Task #1** : Create a if-else condition with all possible conditions
> 
> I've created a simple logic with If/Else condition, If the Mobile store keeper has the mobile, then keeper has to reply via console that the mobile is suited for you, If the customer prompted with the not available model then it should return we don't have the current model yet on our store, Because I've already given the small mobile lists in an Array of objects. 

```js
// My If/Else Challenge Code Has Been Deployed Here. 

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
```

### Live link -> 
Deploy it and put the link here.


## Acknowledgement:
 - Any person who have helped you achieve this challenge. Mention them here. For example, look below.
 - [@AnbuSelvan](https://github.com/anburocky3) | GitHub Profile.

## References:

[![If-Else-Conditional Statement](http://img.youtube.com/vi/WebG_D9-U80/0.jpg)](http://www.youtube.com/watch?v=WebG_D9-U80 "If-Else Conditional Statement")