'use strict'

const forma1 =document.getElementById('forma1')
const forma2 =document.getElementById('forma2')
const forma3 =document.getElementById('forma3')
const forma4 =document.getElementById('forma4')
const forma5 =document.getElementById('forma5')
const forma6 =document.getElementById('forma6')
const forma7 =document.getElementById('forma7')

function trocarCor () {
    forma1.classList.toggle('amarelo')
}

function trocarForma(){
    forma2.classList.toggle('circulo')
}

function trocarForma2(){
    forma3.classList.toggle('circulo2')
}

function trocarImagem(){
    forma4.classList.toggle('imagem')
}

function diminuir(){
    forma5.classList.toggle('diminuir')
}

function mudarLado(){
    forma6.classList.toggle('esquerda')
}

function aumentar(){
    forma7.classList.toggle('aumentar')
}

forma1.addEventListener('click', trocarCor)
forma2.addEventListener('click', trocarForma)
forma3.addEventListener('click', trocarForma2)
forma4.addEventListener('click', trocarImagem)
forma5.addEventListener('click', diminuir)
forma6.addEventListener('click', mudarLado)
forma7.addEventListener('click', aumentar)