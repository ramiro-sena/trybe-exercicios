function checkSuffix(word, ending){
  return (word.slice(word.length - ending.length) === ending) ? true : false;
}

console.log(checkSuffix('trybe', 'be'));
