function getFinalOpenedDoors(numDoors) {

  let doors = []

  for (let i = 0; i <= 100; i++) { 
    doors.push("closed")
  }

  let test = [...Array(numDoors + 1).keys()];

  for (let j = 1; j < test.length; j++) {
    test.forEach(function(doorNum){
      if (doorNum % j === 0) {
        if (doors[doorNum] === "closed") {
          doors[doorNum] = "open"
        } else if (doors[doorNum] === "open") {
          doors[doorNum] = "closed"
      }}
    })
  }

  let result = [];
  for (let i = 0; i < doors.length; i++) {
    if (doors[i] === "open") {
      result.push(i)
    }
  };

  return result;
}
