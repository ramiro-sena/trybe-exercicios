const books = require('./books.js')


//🚀 1 - Filtre todos os objetos do gênero ficção científica ou fantasia.

const filterSciFiFantasy = (books) => (
    books.filter((book) => ['Fantasia', 'Ficção Científica'].includes(book.genre))
);

// console.log(filterSciFiFantasy(books));

//🚀 2 - Filtre os livros com mais de 60 anos desde sua publicação e ordene a partir do livro mais velho para o mais novo.

const filterOver60 = (books) => {
    const currYear = new Date().getFullYear();
    return books
        .filter((book) => book.releaseYear < currYear - 60)
        .sort((a, b) => b.releaseYear - a.releaseYear)
        .map((book) => book.name)
};

// console.log(filterOver60(books));

const authorWith3DotsOnName = (books) => (
    books.find((book) => {
        return /^.\. .\. .\..*/.test(book.author.name);
    }).name
);


// console.log(authorWith3DotsOnName(books));