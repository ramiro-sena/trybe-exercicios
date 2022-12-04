let primeNumbers = [];


for (let i = 2; i <= 50; i++){
  let isPrime = true;
  for (let j = i; j >=1; j--){
    if (j != 1 && j != i && i % j === 0) isPrime = false;
  }
  if (isPrime) primeNumbers.push(i);

}

greatestPrimeNumber = primeNumbers[primeNumbers.length - 1]

console.log(greatestPrimeNumber);