'use strict'

const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lampada = document.getElementById('lampada')

function lampadaQuebrada (){
    return lampada.scroll()
}

function lampadaLigada (){
    if(!lampadaQuebrada ()){
        lampada.src = './img/ligada.jpg'
    }
}

function lampadaDesligada (){
    if(!lampadaQuebrada ()){
        lampada.src = './img/desligada.jpg'
    }
}

function lampQuebrada (){
    lampada.src = './img/quebrada.jpg'
}

ligar.addEventListener( 'click', lampadaLigada)
desligar.addEventListener( 'click', lampadaDesligada)
lampada.addEventListener( 'mouseover', lampadaLigada)
lampada.addEventListener( 'dblclick', lampQuebrada)