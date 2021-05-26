//copy value of person, but secondPerson can be manipulated by
//person because it's connected use pointer
const person = {
    name: 'Jeffar'
}
const seconPerson = person;
person.name = 'Jeffar';
console.log(seconPerson);


//value of person still 'Jeffar' it copy the real person
const person = {
    name: 'Jeffar'
}
const seconPerson = {
    ...person
};
person.name = 'Jeffar Manurung';
console.log(seconPerson);