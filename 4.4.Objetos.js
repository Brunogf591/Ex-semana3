//Declare um objeto para representar seu personagem favorito
//Seja criativo com as propriedades

//Transforme os dois vetores de Arrays.js em um objeto
//Cada matéria representará uma propriedade do objeto,
//com sua nota correspondente sendo o valor associado a essa propriedade.

// Declarar um objeto para representar seu personagem favorito
let personagemFavorito = {
    nome: "Bruce Wayne",
    idade: 40,
    ocupacao: "Batman",
    habilidades: ["combate corpo a corpo", "estratégia", "dinheiro"],
    nivel: 10,
    equipamentos: {
        arma: "batrang",
        armadura: "Justice buster",
        acessorio: "Dinheiro"
    },
    saudar: function() {
        console.log(`Olá, meu nome é ${this.nome} e sou um ${this.ocupacao} de nível ${this.nivel}.`);
    }
};

// Usar o método saudar
personagemFavorito.saudar();


let mats = ["cto", "bd1", "teoria da computação", "organização industrial", "nuvem", "ia", "poo"];
let notas = [82, 79, 70, 92, 60, 92, 92];

let notasPorMateria = {};

for (let i = 0; i < mats.length; i++) {
    notasPorMateria[mats[i]] = notas[i];
}

console.log(notasPorMateria);
