//a) Escreva um programa que verifica se um número digitado pelo usuário é positivo e par.
//Se o número atender a essas duas condições, exiba a mensagem 'O número é positivo e par', caso contrário, exiba a mensagem 'O número não é positivo e par'.


//b) Agora, teste se ele é positivo ou par, mas não ambos. Se o número atender a uma das condições, exiba a mensagem 'O número é positivo ou par', caso contrário, exiba a mensagem 'O número não é positivo ou par'.


//c) Por fim, teste se as variáveis do da letra a e b são iguais. Se forem, exiba a mensagem 'Os números são iguais', caso contrário, exiba a mensagem 'Os números são diferentes'.

let numero1 = 6;
let numero2 = 15;

if (numero1 >= 0 && numero1 % 2 == 0) {
    console.log('O número é positivo e par');
} else {
    console.log('O número não é positivo e par');
}

if ((numero1 >= 0 && numero1 % 2 !== 0) || (numero1 < 0 && numero1 % 2 === 0)) {
    console.log('O número é positivo ou par');
} else {
    console.log('O número não é positivo ou par');
}

if (numero1 == numero2) {
    console.log('Os números são iguais');
} else {
    console.log('Os números são diferentes');
}