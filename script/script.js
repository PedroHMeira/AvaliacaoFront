let botao = document.getElementById("botao");
let somas = document.getElementById("somas");
let subtracoes = document.getElementById("subtracoes");
let multiplicacoes = document.getElementById("multiplicacoes");
let divisoes = document.getElementById("divisoes");

botao.onclick = function() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    let soma = numero1 + numero2;
    let subtracao = numero1 - numero2;
    let multi = numero1 * numero2;
    let divisao = numero1 / numero2;

    somas.textContent = "Soma: " + soma;
    subtracoes.textContent = "Subtração: " + subtracao;
    multiplicacoes.textContent = "Multiplicação: " + multi;
    divisoes.textContent = "Divisão: " + divisao;
}


