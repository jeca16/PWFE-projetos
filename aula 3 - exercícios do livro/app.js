'use strict'

const botaoSomar = document.getElementById('somar')
const botaoIdentificar = document.getElementById('identificar')
const botaoMedia = document.getElementById('media')

function somar() {
    const numero1 = Number(document.getElementById('numero1').value)
    const numero2 = Number(document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')

    const total = numero1 + numero2

    resultado.textContent = total
}

function identificar() {
    const numero = Number(document.getElementById('numero-item2').value)
    const resultado = document.getElementById('resultado-item2')
    let msg
    if (numero > 0) {
        msg = 'positivo'
    } else if (numero < 0) {
        msg = 'negativo'
    } else {
        msg = 'zero'
    }

    resultado.textContent = msg

}

function media() {
    const nota1 = Number(document.getElementById('nota-item3').value)
    const nota2 = Number(document.getElementById('nota2-item3').value)
    const nota3 = Number(document.getElementById('nota3-item3').value)
    const nota4 = Number(document.getElementById('nota4-item3').value)
    const media = document.getElementById('media-item3')

    const total = (nota1 + nota2 + nota3 + nota4) / 4

    let mensagem

    if (total >= 7) {
        mensagem = (total + ' APROVADO!!!')
        media.textContent = mensagem
    } else if (total < 7) {
        let NotaExame = prompt('Digite a quinta nota')
        media.textContent = NotaExame
        
        const novoTotal = (nota1 + nota2 + nota3 + nota4 + NotaExame) / 4
        if (novoTotal >= 5) {
            mensagem = (novoTotal + 'Aprovado em exame!')
            media.textContent = mensagem
        } else {
            mensagem = (novoTotal + 'REPROVADO!')
        }
    } 
    
}



botaoSomar.addEventListener('click', somar)
botaoIdentificar.addEventListener('click', identificar)
botaoMedia.addEventListener('click', media)