//Crie um objeto pessoa com as propriedades nome, idade e altura. Crie duas variáveis Pessoa1 e Pessoa2, e atribua valores diferentes para cada uma das propriedades.
//Compare as variáveis Pessoa1 e Pessoa2 com os operadores relacionais e mostre no console o resultado de cada comparação.

// Criação do objeto pessoa

function Pessoa(nome, idade, altura) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
}

// Criação de duas variáveis Pessoa1 e Pessoa2 com valores diferentes
const Pessoa1 = new Pessoa("Jon", 25, 1.85);
const Pessoa2 = new Pessoa("Doe", 45, 1.65);

// Comparações e resultados no console
console.log("Comparando nomes:");
if(Pessoa1.nome == Pessoa2.nome){
    console.log('Mesmo nome')
}
else{
    console.log('Nomes diferentes')
}

console.log("\nComparando alturas:");
if(Pessoa1.idade > Pessoa2.idade){
    console.log('Pessoa1 mais alta')
}
else{
    if(Pessoa1.idade < Pessoa2.idade){
        console.log('Pessoa2 mais alta')
    }
    else{
        console.log('Mesma altura')
    }
}

console.log("\nComparando idades:");
if(Pessoa1.idade > Pessoa2.idade){
    console.log('Pessoa1 mais velha')
}
else{
    if(Pessoa1.idade < Pessoa2.idade){
        console.log('Pessoa2 mais velha')
    }
    else{
        console.log('Mesma idade')
    }
}