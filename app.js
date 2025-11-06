let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", " Escolha um número entre 1 e 100");
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;
    
    if(chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com 
        ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute ("disabled");
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela("p", "O número secreto é menor");
        } else{
            exibirTextoNaTela("p", "O número secreto é maior");
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100 + 1);
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}













//1
// function exibirOla(){
//     console.log ("Olá, mundo");
//}

// exibirOla();

//2
// function exibirNome(nome){
//     console.log (`Olá, ${nome}`);
//}

// exibirNome();

//3
// function dobroNumero(numero){
//     return numero * 2;
// }

// let resultado = dobroNumero(6);
// console.log(resultado);

//4 
// function mediaNumeros(a, b, c){
//     return (a + b + c) / 3;
//}

// let media = mediaNumeros(4, 6, 8);
// console.log(media);


//5
// function maiorNumero(a, b){
// return a > b? a : b;
//}

// let resultado = maiorNumero(10, 8);
// console.log(resultado);

//6
// function quadrado(numero){
//    return numero * numero;
//}

// let resultado = quadrado(6);
// console.log(resultado);

// function calcularImc(altura, peso){
// let imc = peso / (alturaMetros * alturaMetros);
//}