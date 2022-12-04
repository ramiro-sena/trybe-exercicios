function verifyPalindrome(word){
  return word.toLowerCase().split('').reverse().join('') === word.toLowerCase() ? true : false;
}

console.log(verifyPalindrome('desenvolvimento'));