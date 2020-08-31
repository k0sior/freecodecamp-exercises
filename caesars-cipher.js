function rot13(str) {
  // a to m : 65-77 // n to z : 78-90;
  let i = str.charCodeAt(0);
  let j = 0;
  let result = []
    
  if(str) {
    while (i <= 90 && j < str.length) {
      if (str.charCodeAt(j) >= 65 && str.charCodeAt(j) <= 77 ) {
        result.push(String.fromCharCode(str.charCodeAt(j)+13))
        
      } else if (str.charCodeAt(j) >= 78 && str.charCodeAt(j) <= 90 ) {
        result.push(String.fromCharCode(str.charCodeAt(j)-13))

      } else{
        result.push(String.fromCharCode(str.charCodeAt(j)));
      }
      j++;
    }  
  }
  return result.join("");
}