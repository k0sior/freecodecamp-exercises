// Find the largest palindrome made from the product of two n-digit numbers

function largestPalindromeProduct(n) {

  let max = Math.pow(10, n) - 1;
  let min = Math.pow(10, n - 1);
  let result = [];

  for (let i = max; i >= min; i--) {
    for (let j = max; j >= min; j--) {
      let number = (i * j).toString();
      let reverse = number.split("").reverse().join("")
      if (number === reverse) {
        result.push(Number(number))
        break;
      }
    }
  }
  return Math.max(...result)
}
