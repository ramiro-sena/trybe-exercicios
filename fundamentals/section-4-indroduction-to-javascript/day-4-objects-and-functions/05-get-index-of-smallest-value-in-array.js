test_array = [2, 3, 6, 7, 10, 1];

function getBiggestIndex(array) {
  let index = array.length;
  for(let i in array){
    if(array[i] < array[index]){
      index = i;
    }
  }
  return index;
}

console.log(getBiggestIndex(test_array));
