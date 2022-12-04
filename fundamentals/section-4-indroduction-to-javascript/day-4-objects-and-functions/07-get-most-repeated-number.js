const test_array = [2, 3, 2, 5, 8, 2, 3];


function getMostRepeated(array){
  const count = {}
  for(let i in array){
    count[array[i]] = isNaN(count[array[i]])  ?  1 : count[array[i]] + 1 ;
  }
  
  let most_repeated = 0;
  for(let key in count){
    if(count[key] > most_repeated){
      most_repeated = parseInt(key);
    }
  }

  return most_repeated;
}

console.log(getMostRepeated(test_array));