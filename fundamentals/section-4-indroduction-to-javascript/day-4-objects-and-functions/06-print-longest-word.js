let test_array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];



function getLongestWord(array) {
  let longest = '';

  for (let i = 0; i < array.length; i++) {
    let word = array[i];

    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest
}


console.log(getLongestWord(test_array));