let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplied = [];

for (let i = 0; i < numbers.length; i++){

  multiplied[i] = i < numbers.length - 1  ? numbers[i] * numbers[i + 1] : numbers[i] * 2;  

}

console.log(multiplied)