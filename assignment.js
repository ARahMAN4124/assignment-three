//github link
// https://github.com/ARahMAN4124/assignment-three

//problem number one(kilometerToMeter)

function kilometerToMeter(inputNumber) {
  let meter = inputNumber * 1000;
  if (meter < 0) {
    return "this is not valid number";
  } else {
    return meter;
  }
}
console.log(kilometerToMeter(10));

//problem number two(budgetCalculator)
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

//problem number three(hotelCost)
function hotelCost(days) {
  let totalBill = 0;
  if (days < 0) {
    return "this is not valid number";
  } else if (days <= 10) {
    return (totalBill = 100 * days);
  } else if (days > 10 && days <= 20) {
    let firstprice = 100 * 10;
    let secondPrice = days - 10;
    return (totalBill = secondPrice * 80 + firstprice);
  } else {
    let firstprice = 100 * 10;
    let secondPrice = 10 * 80;
    let thirdPrice = days - 20;
    return (totalBill = thirdPrice * 50 + firstprice + secondPrice);
  }
}
console.log(hotelCost(10));
//problem number four(megaFriend)
function megaFriend() {}
