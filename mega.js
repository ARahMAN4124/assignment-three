function kilometerToMeter(inputNumber) {
  var meter = inputNumber * 1000;
  if (inputNumber < 0) {
    return "Input number will not be negative."; //reminder in output,if input number is negative;
  } else {
    return meter;
  }
}
console.log(kilometerToMeter(10));

function budgetCalculator(watch, mobile, laptop) {
  var watchPrice = 50 * watch;
  var mobilePrice = 100 * mobile;
  var laptopPrice = 500 * laptop;
  var totalPrice = watchPrice + mobilePrice + laptopPrice;
  if (watch < 0 || mobile < 0 || laptop < 0) {
    return "Input number will not be negative."; //reminder in output,if input number is negative;
  } else {
    return totalPrice;
  }
}
console.log(budgetCalculator(10, 2, 10));

function hotelCost(days) {
  var totalBill = 0;
  if (days < 0) {
    return "The day can never be negative."; //reminder in output,if input number is negative;
  } else if (days <= 10) {
    return (totalBill = 100 * days);
  } else if (days > 10 && days <= 20) {
    var firstprice = 100 * 10;
    var secondPrice = days - 10;
    return (totalBill = secondPrice * 80 + firstprice);
  } else {
    var firstprice = 100 * 10;
    var secondPrice = 10 * 80;
    var thirdPrice = days - 20;
    return (totalBill = thirdPrice * 50 + firstprice + secondPrice);
  }
}
console.log(hotelCost(15));

function megaFriend(names) {
  var largeName = names[0];
  for (var i = 0; i < names.length; i++) {
    var element = names[i];
    if (element.length > largeName.length) {
      largeName = element;
    }
  }
  return largeName;
}
console.log(megaFriend(["ab", "abc", "abcd", "abcde"]));
