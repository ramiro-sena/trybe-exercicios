const books = require('./books.js');

//Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

//const expectedResult = 'Stephen King';
const authorBornIn1947 = () => {
    const book = books.find((book) => book.author.birthYear === 1947);
    return book.author.name;
};

//Retorne o nome do livro com menor número de caracteres (menor nome).

//const expectedResult = 'Duna';
const smallerName = (library) => {
    let nameBook;
    // escreva aqui o seu código
    library.forEach((book) => {
        if (!nameBook || book.name.length < nameBook.length) {
            nameBook = book.name;
        }
    })
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
}

// console.log(smallerName(books))


//Encontre o primeiro livro cujo nome possua 26 caracteres.

// const expectedResult = {
//     author: {
//       birthYear: 1948,
//       name: 'George R. R. Martin',
//     },
//     genre: 'Fantasia',
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     releaseYear: 1991,
//   };

const getNamedBook = (books) =>  books.find((book) => book.name.length === 26);

//console.log(getNamedBook(books));

//Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário.

// const expectedResult = false;

function everyoneWasBornOnSecXX(books) {
  // escreva seu código aqui
  return books.every((book) => book.author.birthYear <= 2000 && book.author.birthYear >= 1900);
};

// console.log(everyoneWasBornOnSecXX(books))

//Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

//const expectedResult = true;

const someBookWasReleaseOnThe80s = (books) => {
  // escreva seu código aqui
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990);  
}

// console.log(someBookWasReleaseOnThe80s(books))