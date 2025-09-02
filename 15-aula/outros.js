var produto1 = {
    nome: "coca cola",
    categoria: "bebidas",
    quantidade: 30,
    tamanhos: ["200ml", "lata", "600ml", "2L"],
    // Criação de um metodo interno
    descricao: function(){
        //uso do this como referencial
        console.log("O produto", this.nome, "é da categoria", this.categoria, "e tem", this.quantidade, "unidades")
    },
    verTamanhos : opcoes
}
// this / referencial para as propriedades
var produto2 = {
    nome: "Salgado",
    categoria: "Comida",
    quantidade: 10,
    tamanhos: ["Pequeno", "Médio", "Grande"],
    descricao: function(){
        console.log ("O produto", this.nome, "é da categoria", this.categoria)
    },
    verTamanhos : opcoes
}
function opcoes(){
//     let tmhs = ""
//     for (var i in this.tamanhos){
//     tmhs += this.tamanhos[i]+","
// }
// console.log("As opções são: ", tmhs);
console.log("As opções são: ", this.tamanhos.toString());
}
// exibir 1 por 1
// produto1.verTamanhos()
// produto2.verTamanhos()

produto1.descricao()
produto1.verTamanhos()

produto2.descricao()
produto2.verTamanhos()

// Percorre as listas // console.log("As opções são: ", this.tamanhos.toString());

// criando um terceiro produto, pedindo as informações ao usuário

var produto3 = {
    nome: prompt("Nome"),
    categoria: prompt ("Categoria"),
    quantidade: prompt ("Quantidade"),
    tamanhos: prompt ("Tamanhos: (Separados por virgula)").split(","),
    descricao: function(){
        console.log ("O produto", this.nome, "é da categoria", this.categoria)
    },
    verTamanhos: opcoes
}
produto3.descricao()
produto3.verTamanhos()