'use strict'

async function pegarInformacoes(){

    const url =  'viacep.com.br/ws/01001000/json/'

    const response = await fetch(url)
    const informacoes = await response.json()
    return informacoes.message
}

function criarTag(informacoes){
    const informacoes = document.getElementById('card-container')
}

async function carregarInformacoes(){
    const informacoes = await pegarInformacoes()
    informacoes.forEach(criarTag);
}

carregarInformacoes() 