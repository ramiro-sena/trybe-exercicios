const books = require('./books.js');

//Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

const expectedResult = 'Stephen King';
const authorBornIn1947 = () => {
    const book = books.find((book) => book.author.birthYear === 1947);
    return book.author.name;
};

console.log(authorBornIn1947());