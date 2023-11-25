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