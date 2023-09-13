'use strict'

const funcionarios = [
    {
        nome: "Maria Souza",
        cargo: "Desingner",
        imagem: "maria.jpg"
    },

    {
        nome: "João Silva",
        cargo: "DBA",
        imagem: "joao.jpg"
    },

    {
        nome: "Hugo Pereira",
        cargo: "FrontEnd",
        imagem: "hugo.jpg"
    },

    {
        nome: "Ana Maria",
        cargo: "BackEnd",
        imagem: "ana.jpg"
    },
]



// const limite = funcionarios=length
// for(let i=0; i<limite; i++){
//     console.log(`ID ${i}--${funcionarios[i].cargo}`)
// }

const criarCard = (funcionarios) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem. src = `./img/${funcionarios.imagem}`
    imagem.alt = funcionarios.nome 

    const name = document.createElement('h2')
    name.textContent = funcionarios.nome

    const cargo = document.createElement('p')
    cargo. textContent =  funcionarios.cargo

    card.replaceChildren(imagem, name, cargo)
    return card
}

const mostrarCards = (funcionarios) =>{
    const cardContainer = document.getElementById('card-container')
    const card = criarCard(funcionarios)
    cardContainer.appendChild(card)
}
funcionarios.forEach(mostrarCards)