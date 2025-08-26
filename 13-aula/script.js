//mostra uma mensagem no console
console.log("Vasco da Gama")

//caixa de alerta
//alert("Vasco")

var nome = "Cristiano"
var numero = 7
var pulo = 2.10
var theBest = true 

console.log("Nome:"+nome, "Numero:",numero, "Pulo:",pulo, "O melhor",theBest)

//mostra o tipo da variavel e/ou exibe
typeof(pulo) 
console.log(typeof(pulo));

//Variaveis sem valor ou indefinidas
var nulo = null 
var indefinido = undefined

// // Operadores aritimeticos
// //+,-,*,/,%

var a = 10, b = 5

console.log("Soma:", a+b);
console.log("Subtração:", a-b);
console.log("Multi:", a*b);
console.log("Div:", a/b);
console.log("Módulo:", a%b);

// //OPERADORES LÓGICOS
// //E, OU, NÃO
// //&&, ||, !

var verdade = true
var mentira = false

console.log(verdade && mentira);

console.log(verdade || mentira);

console.log(verdade &&! mentira);

//OPERADORES RELACIONAIS
//>, <, >=, =<, ==, !=, ===, !==

var x= 65, y=32, z="65"

console.log(x > y)
console.log(x < y)
console.log(x >= y)
console.log(x <= y)
console.log(x == y)
console.log(x != y)
console.log(x === z); //valor e tipo precisam ser iguais
console.log(x !== y) // valor é igual e tipo é diferente

// // Interagir com o usuário

var time = prompt("Digite seu clube de coração: ")
console.log("Seu time é o: ", time)

//Desvios condicionais 

var estaVivo = true

if (estaVivo == true){
    console.log("Você está vivo");
}
else if(estaVivo == false){
    console.log("Está morto");
}
else{
    console.log("Vasco");
}

// Switch = escolha 

var camisa = "Laranja"

switch(camisa){
    case "azul":
        console.log("Ganhou um voucher");
        break
    case "Branco":
        console.log("Ganhou playstation");
        break
    case "Vermelho":
        console.log("Ganhou uma ferrari");
        break
    default:
        console.log("Camisa inválida")
        break
}

// Laços de repetição = loops
// For = para

for(var i = 0; i < 5; i++){
    console.log("Estoy ahí");
    
}

// while = enquanto

var c = 1
while (c<10){
    console.log("Entrei no loop")
    c++
}

//Funções
// teste 1
function vasco() {
    console.log("Funcionou sim");
    
}
vasco()

// teste 2 - com parametros
function vasco2(parametro) {
    console.log("O parametro é:", parametro);
}
vasco2("arroz")

// Com retorno
function calculo(n1,n2){
    let resultado = n1+n2
    return resultado
}
var final = calculo(3,5)
console.log("Calculo: ",final);
