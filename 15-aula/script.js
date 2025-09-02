// Com array

var alunos = ["Pedro", "Tiago", "Barquinho"]
var media = [7,8,4]

// console.log("O aluno", alunos[0], "Teve média de", media[2]);

// criando um dicionario
var aluno1 = {
    // chave: "valor",
    nome: "Pedro",
    media: 7
}

var aluno2 = {
    nome: "Tiago",
    media: 8
}

// acessa todo o objeto
// console.log(aluno1);

// acessa uma propriedade daquele objeto
// console.log(aluno1.nome);
// console.log(aluno2.media);

var escola1 = {
    banheiros: 15,
    auditorios: 2,
    qtdSalas: 20,
    qtdAlunos: 300,
}

// exibindo o objeto com frases
// console.log( "A escola possui",escola1.banheiros,"banheiros,", escola1.auditorios, "auditórios,", escola1.qtdSalas, "salas,", escola1.qtdAlunos, "alunos.");

// acessando um valor passando uma chave 
// console.log ("Onde: ", intervalo["local"])

// Criando um objeto vazio
var garrafa = {}

console.log(garrafa);

// Adicionando propriedades ao objeto
garrafa.cor = "Azul",
garrafa.capacidadeML = 700,
garrafa.marca = "Stanley",

console.log(garrafa);

// Alterar propriedade já existentes

garrafa.cor = "roxo",
garrafa ["marca"] = "Topoué"
console.log(garrafa)

// Pedindo para o usuário preencher 

// var novaProp = prompt ("Nova propriedade")
// garrafa[novaProp] = prompt ("Digite um valor: ")

// console.log(garrafa);
// console.log(garrafa.quantidade)

// Criar método

var animal1 = {
    nome: "Tom",
    especie: "gato",
    raca: "nike",
    andar: function (){
        console.log("Estou andando, acredite");
    },
    falar: function (){
    console.log("Miarr");
    }
}

console.log(animal1);
console.log(animal1.andar);
animal1.andar()