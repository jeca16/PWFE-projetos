'use strict'

const mensagens = [
    {
        nome: "Anna",
        imagem: "Anna.jpeg",
        mensagem: "ME DEIXA CASAR COM O HANS!",
        contato: "maninha",
        tempo: "1 dia",
        naoLidas: "20",
    },

    {
        nome: "Hans",
        imagem: "hans.jpeg",
        mensagem: "EU E SUA IRMÃ NOS AMAMOS E VAMOS CASAR!",
        contato: "maluco",
        tempo: "1 dia",
        naoLidas: "40",
    },

    {
        nome: "Kristoff",
        imagem: "kristoff.jpeg",
        mensagem: "Abre a porta aí, sua irmã ta aqui!",
        contato: "entregador de gelo",
        tempo: "10 min",
        naoLidas: "1",
    },

    {
        nome: "Olaf",
        imagem: "Olaf.png",
        mensagem: "Eu sou o olaf eu gosto de abraços quentinhos!",
        contato: "Olaf",
        tempo: "30 min",
        naoLidas: "1",
    },

    {
        nome: "pai",
        imagem: "rei.png",
        mensagem: "Não deixe ninguem saber, eu te amo",
        contato: "papai",
        tempo: "3 anos",
    },

    {
        nome: "mãe",
        imagem: "rainha.jpg",
        mensagem: "te amo filha!",
        contato: "mamãe",
        tempo: "3 anos",
    },

    {
        nome: "Troll",
        imagem: "trolls.jpg",
        mensagem: "o medo vai ser o teu inimigo",
        contato: "Troll",
        tempo: "12 anos",
    }
]

const criarCard = (mensagens) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem.src =  `./img/${mensagens.imagem}`
    imagem.alt = mensagens.imagem 

    const personagem = document.createElement('div')
    personagem.classList.add('personagem')
    const name = document.createElement('h2')
    name.textContent = mensagens.nome

    const mens = document.createElement('h3')
    mens.textContent = mensagens.mensagem

    const cont = document.createElement('h4')
    cont.textContent = mensagens.contato

    const time = document.createElement('h5')
    time.textContent = mensagens.tempo

    const dados=document.createElement('div')
    dados.classList.add('dados')

    const info = document.createElement('div')
    info.classList.add('info')

    dados.replaceChildren(imagem,personagem)
    personagem.replaceChildren(name,mens)
    info.replaceChildren(time,cont)
    card.replaceChildren(dados, info)
    return card
}

const mostrarCards = (mensagens) =>{
    const cardContainer = document.getElementById('card-container')
    const card = criarCard(mensagens)
    cardContainer.appendChild(card)
}
mensagens.forEach(mostrarCards)