//Percorra o vetor de notas que voce criou em 4.4.Arrays.js e calcule a média delas
//Após sair do for imprima sua média

//DESAFIO: copie também o vetor de matérias, utilize o for para percorrer os dois vetores
//e imprimir a matéria e a nota correspondente

let mats = ["cto", "bd1", "teoria da computação", "organização industrial", "nuvem", "ia", "poo"]
let notas = [82, 79, 70, 92, 60, 92, 92]

let média = 0;
for(x=0;x<7;x++){
    média += notas[x]
}
console.log("Média é:")
console.log(média/7)

const NotaMat = []

for(x=0;x<7;x++){
    let NM = {
        mat: mats[x],
        nota: notas[x],
    }
    NotaMat.push(NM)
}

for(x=0;x<7;x++){
    console.log(NotaMat[x])
}