let speed = 90;
const speedCar = (speed) => {
  // if (speed >= 120) {
  //   return `Você ultrapassou o limite de velocidade`;
  // } else {
  //   return `Você está na velocidade permitida`;
  // }
  return speed >= 20 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;

};
console.log(speedCar(speed));