# Switch (Javascript Challenge)
This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> **Task #2** : Create a Switch condition with all possible conditions
> 
> The logic is really simple for "Switch" condition, I need a buying decision based on the saving money, and I have declared a variable as statement because I don't want to type the words instead passing variable to template literals may sound easier than hard coding. 

```js
// My Switch Challenge Code Has Been Deployed Here. 

const savingMoney = 55000;
const statement = `You're Eligible to Buy a`;

switch (true) {
  case savingMoney >= 60000:
    console.log(`${statement} iPhone`);
    break;

  case savingMoney >= 10000 && savingMoney < 60000:
    console.log(`${statement} Middle to Flagship Android Phone`);
    break;

  case savingMoney > 5000 && savingMoney < 10000:
    console.log(`${statement} Normal Android Phone`);
    break;

  default:
    console.log("Maybe in the next gen.");
}
```

### Live link -> 
Deploy it and put the link here.


## Acknowledgement:
 - Abirami
 - Yogha Raj Dhayal
 - Bearcin Sweety

## References:

[![If-Else-Conditional Statement](http://img.youtube.com/vi/xG5IUyZvbDk/0.jpg)](http://www.youtube.com/watch?v=xG5IUyZvbDk "If-Else Conditional Statement")