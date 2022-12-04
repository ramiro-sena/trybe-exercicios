let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];


function arrayOfNumbers(vec){
  let array = [];
  for(let arr of vec){
    for(let number of arr){
      if(number % 2 === 0) {
        array.push(number)
      }
    }
  }
  return array;
}

console.log(arrayOfNumbers(vector))