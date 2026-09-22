function isPalindrome(str) {
  const reverse = str.split("").reverse().join("");
  return str === reverse;
}

console.log(isPalindrome("madam"))


// madam
// level
// racecar