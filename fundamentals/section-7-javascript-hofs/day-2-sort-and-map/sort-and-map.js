//Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

const books = require("./books");

// const expectedResult = [
//     'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
//     'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
//     'Fundação - Ficção Científica - Isaac Asimov',
//     'Duna - Ficção Científica - Frank Herbert',
//     'A Coisa - Terror - Stephen King',
//     'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
// ];

const formatedBookNames = (books) => {
    return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
}

//   console.log(formatedBookNames(books));


//Crie um array com strings no formato NOME_DA_PESSOA_AUTORA - DATA DE NASCIMENTO

// const expectedResult = [
//     'George R. R. Martin - 1948',
//     'J. R. R. Tolkien - 1892',
//     'Isaac Asimov - 1920',
//     'Frank Herbert - 1920',
//     'Stephen King - 1947',
//     'H. P. Lovecraft - 1890',
// ];

const formatedAuthorNamesBirth = (books) => {
    // escreva seu código aqui
    return books.map((book) => `${book.author.name} - ${book.author.birthYear}`) 
}

// console.log(formatedAuthorNamesBirth(books));

//Construa um array de objetos a partir do array de livros.
//Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age, com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha.


const expectedResult = [
    {
      author: 'Isaac Asimov',
      age: 31,
    },
    {
      author: 'H. P. Lovecraft',
      age: 38,
    },
    {
      author: 'Stephen King',
      age: 39,
    },
    {
      author: 'George R. R. Martin',
      age: 43,
    },
    {
      author: 'Frank Herbert',
      age: 45,
    },
    {
      author: 'J. R. R. Tolkien',
      age: 62,
    },
  ];
  
  const nameAndAge = (books) => {
    return books.map(book => ({
        author: book.author.name,
        age: book.releaseYear - book.author.birthYear,
    })).sort(((a, b) => a.age - b.age));
  }

  console.log(nameAndAge(books))