function check(value){
  if(value > 0) {
    return "positive";
  } else if( value < 0) {
    return "negative";
  } else{
    return "zero";
  }
}

console.log(check(0));