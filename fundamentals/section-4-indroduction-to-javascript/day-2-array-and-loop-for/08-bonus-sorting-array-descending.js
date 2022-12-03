let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


for (let index = 1; index < array.length; index += 1) { //for each item in array
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) { //for each iterated item
    if (array[index] > array[secondIndex]) { // if current item is less than previous
      let position = array[index];        
      array[index] = array[secondIndex];     // switch places
      array[secondIndex] = position;
    }
  }
}

console.log(array)