function hotel(days) {
  var totalMoney = 0;
  if (days <= 10) {
    return (totalMoney = 100 * days);
  } else if (days > 10 && days <= 20) {
    var firstprice = 100 * 10;
    var secondPrice = days - 10;
    return (totalMoney = secondPrice * 80 + firstprice);
  } else {
    let firstprice = 100 * 10;
    let secondPrice = 10 * 80;
    let thirdPrice = days - 20;
    return (totalMoney = thirdPrice * 50 + firstprice + secondPrice);
  }
}
console.log(hotel(30));
