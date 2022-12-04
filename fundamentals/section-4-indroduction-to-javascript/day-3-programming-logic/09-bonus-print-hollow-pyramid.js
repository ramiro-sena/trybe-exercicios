let n = 17;

for (let i = 1; i <= n; i++) {

  let spaces = ((n - i) / 2);
  let symbols = i;
  let line = '*'
  if (Number.isInteger(spaces)) {
    if (i == 1) {

      line = ' '.repeat(spaces) + '*'

    } else if (i != n) {

      line = ' '.repeat(spaces) + '*' + ' '.repeat(i-2) + '*'
      // console.log(line + line.split('').reverse().join(''));

    } else {

      line = '*'.repeat(n)

    } 

    console.log(line)
  }
}