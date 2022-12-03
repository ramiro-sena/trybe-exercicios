let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let max = 0;

for (let number of numbers){
  max = number > max ? number : max;
}

console.log(max);