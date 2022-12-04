let motor_status = false;

const ligarDesligar = () => {
  motor_status = !motor_status;
  console.log(`O motor está ${motor_status ? 'ligado' : 'desligado'}`); 
}

ligarDesligar();
ligarDesligar();
ligarDesligar();