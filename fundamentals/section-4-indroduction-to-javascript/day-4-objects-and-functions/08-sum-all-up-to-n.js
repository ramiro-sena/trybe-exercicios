const test_value = 5;

function sumAll(value){
  let result = 0;
  for(let i = 1; i <= value; i++){
     result += i;
  }

  return result;
}

console.log(sumAll(test_value));