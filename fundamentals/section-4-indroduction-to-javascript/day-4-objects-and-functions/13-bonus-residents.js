let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

let ultimo_morador_b2 = moradores.blocoDois[moradores.blocoDois.length - 1]

let string = 'O morador do bloco 2 de nome '
string += `${ultimo_morador_b2.nome} ${ultimo_morador_b2.sobrenome} mora no ${ultimo_morador_b2.andar}° andar, apartamento ${ultimo_morador_b2.apartamento}`

console.log(string)

console.log();

function showResidents(bloco) {
  for (let morador of bloco) {
    console.log(`${morador.nome} ${morador.sobrenome}`);
  }
}

console.log('Moradores do bloco 1:');
showResidents(moradores.blocoUm)
console.log();
console.log('Moradores do bloco 2:');
showResidents(moradores.blocoDois)