//  Crie um algoritmo que imprima na tela o fatorial de 10.

let value = 10;

function getFactorial(number){
  
  let factorial = number;

  for(let i = number - 1; i > 0; i--){
    factorial *= i;
  }

  return factorial
}

console.log(getFactorial(value));