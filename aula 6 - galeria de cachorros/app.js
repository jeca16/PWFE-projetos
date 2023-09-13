'use strict'

async function pegarImagens(){

    const url = 'https://dog.ceo/api/breed/husky/images'

    const response = await fetch(url)
    const imagens = await response.json()
    return imagens.message
}

function criarTagImg(imagem){
    const galeria = document.getElementById('galeria')
    const tagImg = document.createElement('img')
    tagImg.src = imagem
    galeria.appendChild(tagImg)
}

async function carregarFotos(){
    const imagens = await pegarImagens()
    imagens.forEach(criarTagImg);
}

carregarFotos() 




// const listaImagens = [
    //     './img/ana.jpg',
    //     './img/hugo.jpg',
    //     './img/joao.jpg',
    //     './img/maria.jpg'

    // ]
    // 