test_array = [2, 4, 6, 7, 10, 0, -3];

function getBiggestIndex(array) {
  let index = array.length -1;
  for(let i in array){
    if(array[i] < array[index]){
      index = i;
    }
  }
  return index;
}

console.log(getBiggestIndex(test_array));
