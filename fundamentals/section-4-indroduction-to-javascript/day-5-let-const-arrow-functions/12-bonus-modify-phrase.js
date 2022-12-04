const substituaX = (name) => {
  const frase = 'Tryber x aqui!';
  return `${frase.split('x')[0]}${name}${frase.split('x')[1]}`;
}

const minhasSkills = (phrase) => {
  const skills = ['git, javascript, bash'];
  let newPhrase = `${phrase}
Minhas três principais habilidades são:
${skills}`
  return newPhrase;
}

console.log(minhasSkills(substituaX('Bebeto')));



