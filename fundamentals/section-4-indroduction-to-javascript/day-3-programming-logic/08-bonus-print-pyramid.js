let n = 5;

for (let i = 1; i <= n; i++){

  let spaces = ((n - i)/2);
  let symbols = i;
  if (Number.isInteger(spaces)){
    let line = ' '.repeat(spaces) + '*'.repeat(symbols)
    console.log(line)
  }
}