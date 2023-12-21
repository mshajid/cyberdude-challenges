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
  