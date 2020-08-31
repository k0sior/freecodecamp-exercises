function palindrome(str) {
  str = str.replace(/[_+]/gi, "").toLowerCase();
  let validator = /([\w^])/gi;
  let arr = str.match(validator);
  let toValid = [];

  for (let i = 1; i <= arr.length;i++){
    toValid.push(arr[arr.length - i])
  }

  if (toValid.join("") === arr.join("")) {
    return true
  }
  return false;
}


console.log(palindrome("My age is 0, 0 si ega ym."));