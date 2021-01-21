function budget(num1, num2, num3) {
  let price1 = 50 * num1;
  let price2 = 100 * num2;
  let price3 = 500 * num3;
  let totalPrice = price1 + price2 + price3;
  if (totalPrice < 0) {
    return "this is not valid input";
  } else {
    return totalPrice;
  }
}
console.log(budget(20, 10, 5));
