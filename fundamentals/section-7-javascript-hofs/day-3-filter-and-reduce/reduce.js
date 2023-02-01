const countries = require('./countries.js');

// 1 - Calcule a quantidade total da população de todos os países.

const getPopulation = (data) => (
    data.reduce((acc, curr) => {
        return curr.population + acc;
    }, 0)
);

// console.log(getPopulation(countries));

// 2 - Calcule a área total de todos os países.

const getTotalArea = (data) => (
    data.reduce((acc, curr) => {
        return acc + curr.area;
    }, 0)
)

// console.log(getTotalArea(countries));

// 3 - Encontre o país com o maior nome.


const longestNameSort = (data) => (
    data.sort((a, b) => {
        return b.name.length - a.name.length
    })[0]
);

const longestName = (data) => {
    data.reduce((acc, curr) => (
        curr.name.length > acc ? curr.name.length : acc
    ), 0);
    return data.find((countrie) => countrie.name.length === 14)
};


// console.log(longestName(countries));

// 4 - Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

// const expectedResult = 20;

const countA = () => (
    ''.concat(...names).split('').reduce((acc, curr) => (
        curr.toLowerCase() === 'a' ? acc + 1 : acc
    ), 0)
)

// console.log(countA())

// 5 - Crie um array de objetos e calcule a média de notas. Utilize as constantes students e grades para criar um array de objetos e calcule a média da nota das pessoas estudantes:

// O index 0 do array `students` equivale ao index 0 do array `grades`

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const expectedResult = [
    { name: 'Pedro Henrique', average: 7.8 },
    { name: 'Miguel', average: 9.2 },
    { name: 'Maria Clara', average: 8.8 },
];

const average = (array) => array.reduce((acc, curr) => acc + curr) / array.length;

const studentAverage = () => (
    students.map((student, index) => ({
        name: student,
        average: average(grades[index]),
    })
    )
);

console.log(studentAverage())