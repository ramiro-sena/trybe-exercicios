function romanToInteger(input) {
  const dict = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000,
  }

  input = input.toUpperCase()
  let integer = 0;

  for(let i = 0; i < input.length; i++){
    
    if(dict[input[i]] < dict[input[i + 1]]){
      integer -= dict[input[i]]
    } else {
      integer += dict[input[i]]
    }
  }
  return integer;
}


console.log(romanToInteger('MCMXCIV'));