let array = ['java', 'javascript', 'python', 'html', 'css'];

let shortest;
let longest;

for (let i = 0; i < array.length; i++){
  let word = array[i];

  if (i == 0) {
    shortest = word;
    longest = word;
  } 

  if (word.length > longest.length){
    longest = word;
  } else if (word.length < shortest.length){
    shortest = word;
  }
  
}

console.log("shortest", shortest);
console.log("longest", longest);