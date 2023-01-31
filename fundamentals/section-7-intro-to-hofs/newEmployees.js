
const employeeGenerator = (fullName) => ({
    fullName: fullName,
    email: `${fullName.toLowerCase().split(' ').join('_')}@trybe.com`,
});

// console.log(createEmail('Ramiro Sena de Oliveira'));

const newEmployees = (callback) => {
    const employees = {
        id1: callback('Pedro Guerra'),
        id2: callback('Luiza Drumond'),
        id3: callback('Carla Paiva'),
    };

    return employees;
};


console.log(newEmployees(employeeGenerator));

