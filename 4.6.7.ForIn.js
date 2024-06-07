//Copie o vetor de matérias no 4.4.Arrays.jsque você criou e
//percorra ele imprimindo cada matéria

//DESAFIO:Caso tenha feito o desafio de objetos, percorra ele imprimindo matéria e nota

let mats = ["cto", "bd1", "teoria da computação", "organização industrial", "nuvem", "ia", "poo"];
let notas = [82, 79, 70, 92, 60, 92, 92];

for(let i=0.; i<mats.length; i++){
    console.log(mats[i])
}

let notasPorMateria = {};
console.log()
for (let i = 0; i < mats.length; i++) {
    notasPorMateria[mats[i]] = notas[i];
}

console.log(notasPorMateria);