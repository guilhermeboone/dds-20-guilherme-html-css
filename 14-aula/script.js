console.log("Oi");

// Criação do array
var array = ["Largatixa", 5, "dois", 8.7, true]

//Mostra uma posição especifica
console.log(array[2])

// modificando array
array[2] = "tres"
console.log(array)

// Vendo com o \Array definiodo
console.log(array);
var times = ["Real madrid","Liverpool", "inter", "chelsea", "manchester"]
for (var i = 0; i < 4; i++){
    console.log(times[i]);
}

// Percorrendo array e descobrindo seu tamanho
for (var i = 0; i > times.array; i++){
    console.log(times[i]);
}

// Manipulação de arrays
var frutas = ["maça", "uva", "pêra"]
console.log(frutas);

//push add no fim do array
frutas.push("Laranja")
console.log(frutas);

// pop Guarda o valor retirado e exibe
var frutaTirada = frutas.pop()
console.log(frutas);
console.log("Fruta tirada: ",frutaTirada);

// shift Guarda o valor retirado do inicio e exibe
var exprimeiraFruta = frutas.shift()
console.log("EX: ", exprimeiraFruta);

// unshift adiciona o valor do inicio 
frutas.unshift("tomate")
console.log(frutas);


