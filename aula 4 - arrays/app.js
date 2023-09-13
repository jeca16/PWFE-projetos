'use strict'

const botaoMostraTodosNumeros = document.getElementById('botao-mostrar-todos-numeros')
const botaoMostrarTodosNumerosPares = document.getElementById('botao-mostrar-todos-numeros-pares')
const botaoMostrarTodosNumerosImpares = document.getElementById('botao-mostrar-todos-numeros-impares')
const botaoMostrarTodosNumerosMultiplos = document.getElementById('botao-mostrar-todos-numeros-multiplos')
const botaoMostrarTodosNumerosMultiplos3E4 = document.getElementById('botao-mostrar-todos-numeros-multiplos-3-e-4') 
const botaoMostrarTodosNumerosMultiplos3Ou4 = document.getElementById('botao-mostrar-todos-numeros-multiplos-3-ou-4') 
const botaoMostrarProximoNumeros = document.getElementById ('botao-mostrar-proximo-numeros')
const botaoMostrarProximoNumerosPar = document.getElementById('botao-mostrar-proximo-numeros-par')
const botaoMostrarDobroNumeros = document.getElementById('botao-mostrar-dobro-numeros')

function mostrarTodosNumeros() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-todos-numeros')

    container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let indice = 0; indice < ultimoIndice; indice++) {
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[indice]
        container.appendChild(novoSpan)
    }
}

function mostrarNumerosPares() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-pares')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++) {
        if (numeros[indice] % 2 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

function mostrarNumerosImpares() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-impares')

    container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let indice = 0; indice < ultimoIndice; indice++) {
        if (numeros[indice] % 2 == 1) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

function mostrarNumerosMultiplos() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-multiplos')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++) {
        if (numeros[indice] % 3 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

function mostrarMultiplos3E4(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-multiplos-3-e-4')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++) {
        if (numeros[indice] % 3 == 0 && numeros[indice] %4 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

function mostrarMultiplos3Ou4(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-multiplos-3-ou-4')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++) {
        if (numeros[indice] % 3 == 0 || numeros[indice] %4 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

function mostrarProximoNumeros(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-proximo-numeros')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++) {
        if (numeros[indice] ++) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}


function mostrarProximoPar(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-proximo-numeros-par')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++) {
        if (numeros[indice] % 2 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number (numeros[indice]) + 2 
            container.appendChild(novoSpan)
        }else if(numeros[indice] % 2 == 1){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number (numeros[indice]) + 1 
            container.appendChild(novoSpan)
        }

    }
}
function mostrarDobroNumeros(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-dobro-numeros')

 
    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice] *2
            container.appendChild(novoSpan)
        
    }
}
botaoMostraTodosNumeros.addEventListener('click', mostrarTodosNumeros)
botaoMostrarTodosNumerosPares.addEventListener('click', mostrarNumerosPares)
botaoMostrarTodosNumerosImpares.addEventListener('click', mostrarNumerosImpares)
botaoMostrarTodosNumerosMultiplos.addEventListener('click', mostrarNumerosMultiplos)
botaoMostrarTodosNumerosMultiplos3E4.addEventListener('click', mostrarMultiplos3E4)
botaoMostrarTodosNumerosMultiplos3Ou4.addEventListener('click', mostrarMultiplos3Ou4)
botaoMostrarProximoNumeros.addEventListener('click', mostrarProximoNumeros)
botaoMostrarProximoNumerosPar.addEventListener('click', mostrarProximoPar)
botaoMostrarDobroNumeros.addEventListener('click', mostrarDobroNumeros)