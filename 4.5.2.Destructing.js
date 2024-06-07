/*
Exercício de Destructuring em JavaScript

1. Dado o seguinte array:
const numbers = [1, 2, 3, 4, 5];

a) Utilize a sintaxe de Destructuring para atribuir os valores 1, 2 e 3 às variáveis a, b e c, respectivamente.

b) Utilize a sintaxe de Destructuring para atribuir os valores 4 e 5 a uma variavel d.

2. Dado o seguinte objeto:
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

a) Utilize a sintaxe de Destructuring para atribuir os valores 'John', 30 e 'New York' às variáveis name, age e city, respectivamente.

b) Utilize a sintaxe de Destructuring para atribuir o valor 'John' e o valor 30 à variável PersonResume.

*/

// Parte 1: Destructuring com Arrays
const numbers = [1, 2, 3, 4, 5];

// a) Atribuir os valores 1, 2 e 3 às variáveis a, b e c
const [a, b, c] = numbers;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// b) Atribuir os valores 4 e 5 a uma variável d
const [, , , ...d] = numbers;
console.log(d); // [4, 5]

// Parte 2: Destructuring com Objetos
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// a) Atribuir os valores 'John', 30 e 'New York' às variáveis name, age e city
const { name, age, city } = person;
console.log(name); // 'John'
console.log(age); // 30
console.log(city); // 'New York'

// b) Atribuir o valor 'John' e o valor 30 à variável PersonResume
const { name: PersonResumeName, age: PersonResumeAge } = person;
const PersonResume = { PersonResumeName, PersonResumeAge };
console.log(PersonResume); // { PersonResumeName: 'John', PersonResumeAge: 30 }