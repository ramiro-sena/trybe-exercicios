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
        if (!nameBook || book.name.length < nameBook.length){
            nameBook = book.name;
        }
    })
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
}

console.log(smallerName(books))