// Pedir 5 nomes, guardar e exibir


//     var nomes = [];

// for (var i = 0; i < 5; i++){
//  var nome = prompt("Informe um nome: ");
//  nomes.push(nome)
// }
//     console.log("Os nomes cadastrados foram:");
//     for (var i = 0; i < nomes.length; i++) {
//     console.log(nomes[i]);
//     }

// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

//criando os arrays

var alunos = []
var notasA = []
var notasB = []

// função cadastro 
function cadastro(){
    for (var i = 0; i < 3; i++){
        alunos[i] = prompt ("Digite um nome: ")
        notasA[i] = prompt ("Digite uma nota: ")
        notasB[i] = prompt ("Digite outra nota: ")
    }
}
cadastro()
console.log(alunos);
console.log(notasA);
console.log(notasB);

//função para calcular média
function calcMedia(nota1, nota2){
    let mediaFinal = ((nota1 * 0.4)+(nota2*0.6))
    return mediaFinal
}

// verificar a situação
function situacao(media){
    if (media >=7){
        return "aprovado"
    }
    else if (media >=5){
        return "Em recuperação"
    }
    else {
        return "Reprovado"
    }
}

// Mostrar resultado

function mostrarResultados(){
    for (var i in alunos){
    let notaPri = notasA[i]
    let notaSeg = notasB[i]
    let mediaAtual = calcMedia (notaPri, notaSeg)
    let sutuacaoAtual = situacao(mediaAtual)

    console.log("O aluno", alunos[i], "teve media de: ", mediaAtual);
    console.log("Sua situação então é: ", sutuacaoAtual);
    
    }
}

cadastro();
mostrarResultados()