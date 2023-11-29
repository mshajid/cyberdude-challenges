# Function (Javascript Challenge)
This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> **Task #5** : Function (Expression, Return, Pass Arguments and Parameters, IIFE) (Reference) that functions CRUD Operation.
>
> 

```js
let shajidAccount = {
    balance: 0,
  };
  
  // Deposit Function
  const deposit = function(account, amount) {
    if(amount > 0){
      account.balance = account.balance + amount;
      return account.balance;
    }
  };
  
  const initialDeposit = deposit(shajidAccount, 150);
  const justDeposit = deposit(shajidAccount, 150);
  
  console.log(shajidAccount.balance);
```

### Live link -> 
Deploy it and put the link here.


## Acknowledgement:


## References:
All thanks to Cyberdude Networks (Pvt) Ltd for their efforts towards on JavaScript in Tamil. I learnt many things about arrays through this playlist. So I don't wanted to list every single videos I watched here, Instead you can see everything one by one.

[CyberDude JavaScript Playlist](https://www.youtube.com/playlist?list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa)