function budgetCalculator(num1, num2, num3) {
  let watchPrice = 50 * num1;
  let mobilePrice = 100 * num2;
  let laptopPrice = 500 * num3;
  let totalPrice = watchPrice + mobilePrice + laptopPrice;
  if (totalPrice < 0) {
    return "this is not valid input";
  } else {
    return totalPrice;
  }
}
console.log(budgetCalculator(10, 2, 10));
