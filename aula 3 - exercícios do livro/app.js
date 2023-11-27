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
    let nota1 = Number(document.getElementById('nota-item3').value)
    let nota2 = Number(document.getElementById('nota2-item3').value)
    let nota3 = Number(document.getElementById('nota3-item3').value)
    let nota4 = Number(document.getElementById('nota4-item3').value)
    let media = document.getElementById('media-item3')

    const total = (nota1 + nota2 + nota3 + nota4) / 4

    let mensagem

    if (total >= 7) {
        mensagem = (total + ' APROVADO!!!')
        media.textContent = mensagem
    } else if (total < 7) {
        let NotaExame = prompt('Digite a quinta nota')
        media.textContent = NotaExame
        let newMedia = parseFloat(media.textContent = NotaExame)

        novaMedia = (total + newMedia)
        mediaAtualizada =(novaMedia)/5

        if(mediaAtualizada >= 5){
            mensagem = (mediaAtualizada + 'aprovado em exame')
        } else if (mediaAtualizada < 5){
            mensagem = (mediaAtualizada + 'reprovado!!')
        }
        
    } 
    
}



botaoSomar.addEventListener('click', somar)
botaoIdentificar.addEventListener('click', identificar)
botaoMedia.addEventListener('click', media)