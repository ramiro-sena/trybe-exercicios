const a = 152;
const b = 128;
const c = 258;

if (a > b && a > c) {
  console.log(a);
} else if( b > a && b > c){
  console.log(b);
} else if( c > a && c > b){
  console.log(c);
} else{
  console.log("repeated value");
}