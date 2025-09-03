// Console - terminal do navegador
// Console.log (console)

// window - janela do navegador
// window.alert("sim")
// alert("não")

// document = DOM ou seu código HTML inteiro 
console.log(document)
console.log(document.head);
console.log(document.body)

// Acessar elementos do body
//pega elementos pela tag
var titulos = document.getElementsByTagName("h1")
console.log(titulos);

// pega elementos pela classe
var paragrafos = document.getElementsByClassName ("para")
console.log(paragrafos);

// pega elementos pelo id

var especifico = document.getElementById ("p3")
console.log(especifico);

// pego por id
especifico.style.backgroundColor= "green"
especifico.style.color= "yellow"

//  pego por class // paragrafo é um array 
paragrafos[0].style.backgroundColor = "pink"

// pego por tag
titulos[2].style.backgroundColor = "orange"

function cliquei(){
    console.log("Eu falei pra você não clicar");
    
}

// criar um botão que altere os titulos para verde e aumente a fonte para 100px

function shazam(){
    for (var i = 0; i< titulos.length; i++){
    titulos[i].style.backgroundColor = "red"
    titulos[i].style.color = "yellow"
    titulos[i].style.fontSize = "100px"
    }
}

function quemFoi(elemento){
    console.log(elemento);
}