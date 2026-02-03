const dolar = 5.5;
const euro = 6.2;
const euroD = 1.19;
const botao = document.querySelector("#cv");
const res = document.querySelector("#res");
const opcaoEntrada = document.querySelector("#moedaOrigem");
const opcao = document.querySelector(".cambio");
const origem = document.querySelector("#origem");
const valorInicial = document.querySelector("brl");
const imagemInicio = document.querySelector("#inicio");
const escolhaEscrita = document.querySelector("#escolhidaEscrita");
const escolhaNumerica = document.querySelector("#escolhidaNumerica")
const nomeFinal = document.querySelector("#nomeFinal");
const imagemFinal = document.querySelector("#final");


function moedaEntra() {
    if(opcaoEntrada.value == "Real" ) {
        imagemInicio.src = "brasil.png"
        escolhaEscrita.innerHTML = "Real"
    }
    if (opcaoEntrada.value == "Dolar" ) {
        imagemInicio.src = "usa.png"
        escolhaEscrita.innerHTML = "Dolar"
    }
    if (opcaoEntrada.value == "Euro" ) {
        imagemInicio.src = "euro.png"
        escolhaEscrita.innerHTML = "Euro"
    }

}

function moeda() {
    if(opcao.value == "Real" ) {
        imagemFinal.src = "brasil.png"
        nomeFinal.innerHTML = "Real"
    }
    if (opcao.value == "Dolar" ) {
        imagemFinal.src = "usa.png"
        nomeFinal.innerHTML = "Dolar"
    }
    if (opcao.value == "Euro" ) {
        imagemFinal.src = "euro.png"
        nomeFinal.innerHTML = "Euro"
    }

}

function conversao() {

    if(opcaoEntrada.value == "Real" && opcao.value == "Dolar" ) {
        const digitado = document.getElementsByName("valor")[0].value
        const resultado = Number(digitado/dolar)
        resultado.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(resultado)
        const formatandoMoeda = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(digitado)
        escolhaNumerica.innerHTML = formatandoMoeda
        res.innerHTML = `U$$ ${resultado.toFixed(2)}`
    }
    if(opcaoEntrada.value == "Dolar" && opcao.value == "Real" ) {
        const digitado = document.getElementsByName("valor")[0].value
        const resultado = Number(digitado*dolar)
        resultado.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(resultado)
        const formatandoMoeda = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(digitado)
        escolhaNumerica.innerHTML = formatandoMoeda
        res.innerHTML = `R$ ${resultado.toFixed(2)}`
    }
    if(opcaoEntrada.value == "Dolar" && opcao.value == "Euro" ) {
        const digitado = document.getElementsByName("valor")[0].value
        const resultado = Number(digitado/euroD)
        resultado.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "EUR"
        }).format(resultado)
        const formatandoMoeda = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(digitado)
        escolhaNumerica.innerHTML = formatandoMoeda
        res.innerHTML = `€ ${resultado.toFixed(2)}`
    }

    if(opcaoEntrada.value == "Euro" && opcao.value == "Dolar" ) {
        const digitado = document.getElementsByName("valor")[0].value
        const resultado = Number(digitado*euroD)
        resultado.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(resultado)
        const formatandoMoeda = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "EUR"
        }).format(digitado)
        escolhaNumerica.innerHTML = formatandoMoeda
        res.innerHTML = `U$$ ${resultado.toFixed(2)}`
    }
    
    if(opcaoEntrada.value == "Euro" && opcao.value == "Real" ) {
        const digitado = document.getElementsByName("valor")[0].value
        const resultado = Number(digitado*euro)
        resultado.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
        }).format(resultado)
        const formatandoMoeda = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "EUR"
        }).format(digitado)
        escolhaNumerica.innerHTML = formatandoMoeda
        res.innerHTML = `R$ ${resultado.toFixed(2)}`
        
    }
    if(opcaoEntrada.value == "Real" && opcao.value == "Euro" ) {
        const digitado = document.getElementsByName("valor")[0].value
        const resultado = Number(digitado/euro)
        resultado.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "EUR"
        }).format(resultado)
        const formatandoMoeda = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
        }).format(digitado)
        escolhaNumerica.innerHTML = formatandoMoeda
        res.innerHTML = `€ ${resultado.toFixed(2)}`
    }  
}

opcaoEntrada.addEventListener('change', moedaEntra)
opcao.addEventListener('change', moeda)
botao.addEventListener('click', conversao)