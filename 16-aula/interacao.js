function troca(elementoQueChamou){
    //console.log(elementoQueChamou);
    let textoNovo = elementoQueChamou.value

    let textoAntigo = document.getElementById
    ("textoTrocar")

    textoAntigo.innerText = textoNovo
    
}

function trocaAgora(elementoQueChamou){
    //console.log(elementoQueChamou);
    let textoNovo = elementoQueChamou.value

    let textoAntigo = document.getElementById
    ("textoTrocarAgora")

    textoAntigo.innerText = textoNovo
}

function viraVerde(elemento){
    elemento.style.color = "green"
    elemento.style.fontSize = "200px"
}

function viraAzul(elemento){
    elemento.style.color = "blue"
    elemento.style.fontSize = "10px"
}