function checkNumber(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 10) {
    return "Negative";
  } else {
    return "Zero";
  }
}

console.log(checkNumber(-5))