const runLottery = (guessing) => Math.floor(Math.random() * 4 + 1) === guessing ? 'Parabéns, você ganhou' : 'Tente novamente';

console.log(runLottery(3));
