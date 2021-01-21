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
