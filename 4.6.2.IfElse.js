//Faça um condicional para verificar se a nota de calculo deu para passar

// DESAFIO: dado um valor em R$, verificar se você precisa de moedas ou não
// Dica: tenta ver as casas decimais

let notaCalc = 65;
if(notaCalc >= 60){
    console.log('Aprovado')
}
else{
    console.log('Reprovado')
}

let dinheiro = 3.40
let valorqueprecisa = 2.40
console.log(Math.floor((dinheiro-valorqueprecisa)/1))
console.log(dinheiro-valorqueprecisa)
if(Math.floor((dinheiro-valorqueprecisa)/1) != dinheiro-valorqueprecisa){
    console.log("Precisa de moedas.")
}
else{
    console.log("Não precisa de moedas.")
}