'use strict'
const input = document.getElementById('cep')

async function pegarInformacoes(){
    const url = ' https://viacep.com.br/ws/01001000/json/'

    const response = await fetch(url)
    const informacoes = await response.json()
    return informacoes.message
}

function criarCard (informacao){
    const infomacao = document.getElementById('cep')
}

async function pegarInformacoes(){
    const informacoes = await pegarInformacoes()
    informacoes.forEach(criarCard);
}

input.addEventListener('blur', pegarInformacoes)