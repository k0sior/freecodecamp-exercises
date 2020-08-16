function orbitalPeriod(arr) {
  
  let result = [];
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let b = 2 * Math.PI;
  var orbitalCalc = function (obj) {
    let a = Math.pow(earthRadius + obj.avgAlt, 3)
    let u = Math.sqrt(a / GM);
    let orbPer = Math.round(b * u);
    delete obj.avgAlt;
    obj.orbitalPeriod = orbPer;
    
    return obj;
    }

    for (var element in arr) {
      result.push(orbitalCalc(arr[element]))
    }
  return result;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
