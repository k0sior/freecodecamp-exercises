function sumPrimes(num) {

  let notPrimes = [];
  let primes = [];

  for (let i = 2; i <= num; ++i) {
    if (!notPrimes[i]) {
      primes.push(i);
      for (let j = i; j <= num; j += i) {
        notPrimes[j] = true;
      }
    }
  } 
  return primes.reduce((a, b) => a + b);
}


console.log(sumPrimes(10));
