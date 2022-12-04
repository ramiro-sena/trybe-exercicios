let n = 5;

for (let i = 1; i <= n; i++){
  let row = '*'.repeat(i) + ' '.repeat(n - i);
  console.log(row.split('').reverse().join(''));
}