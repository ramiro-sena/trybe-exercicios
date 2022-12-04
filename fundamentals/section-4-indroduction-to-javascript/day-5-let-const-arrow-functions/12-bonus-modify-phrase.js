const substituaX = (name) => {
  const frase = 'Tryber x aqui!';
  return `${frase.split('x')[0]}${name}${frase.split('x')[1]}`;
}

console.log(substituaX('Bebeto'))