var idade = prompt("Digite sua idade: ")
var ingresso = prompt("Quantos ingressos serão: ")

    if (idade <=17){
    total= 15*ingresso
    console.log("O total é: ", total);
    }

    else if (idade >17 && idade <=59){
        total=30*ingresso
    console.log("O total é: ", total);
    }

    else {
        total=20*ingresso
    console.log("O total é: ", total);
}