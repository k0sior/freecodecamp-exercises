function pairwise(arr, arg) {
 // arr[i] + arr[j] === arg
  let result = [];
  
  for(let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j){
        //do nothing
      } else if (arr[i] + arr[j] == arg) {
          result.push(i)  // sol. 2: let sum += i + j
          result.push(j)
          arr.splice(i, 1, NaN);
          arr[j] = NaN;
      }
    }
  }
  result.push(0) //to return a number if (arr === [])

  var sum = result.reduce((a, b) => a + b); //sum of all indicies

  return sum;
}