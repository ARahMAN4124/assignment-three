function feet(num) {
  let result = num * 1000;
  if (result < 0) {
    return "this is not valid number";
  } else {
    return result;
  }
}
console.log(feet(-10));
