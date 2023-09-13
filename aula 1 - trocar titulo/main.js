'use strict'

/* Para declarar variavável:
    1 - const -> ímutavel -> bloco
    2 - let   -> mutável  -> bloco (abrir e fechar de chaves - {})
    3 - var   -> mutável  -> global ("vale" em todo código)
*/

/* document.getElementById(''):
    -> serve para "buscar" um elemento no html pelo Id da tag , e no parênteses
    inserimos o Id do elemento que queremos que o comando "busque"
*/  

/*Prompt(''):
    -> serve para aparecer um campo para o usuário digitar  ( como o JOption no java)
*/ 


function trocarTitulo(){
    const tituloPagina = document.getElementById('titulo')

    let tituloDigitado = prompt('Digite um título')

    if( tituloDigitado ==''){
        tituloDigitado = 'escola Senai 12.7'
    }

    titulo.textContent = tituloDigitado
}

const botaoTrocarTitulo = document.getElementById('trocar-Titulo')
botaoTrocarTitulo.addEventListener('click', trocarTitulo)


function cadastrar(){
    const nome = document.getElementById('nome')
    let nomeDigitado = prompt('Digite seu nome')
    nome.textContent = 'Nome: ' + nomeDigitado

    const idade = document.getElementById('idade')
    let idadedigitado = prompt('Digite sua idade')
    idade.textContent = 'Idade: ' + idadedigitado

    const cidade = document.getElementById('cidade')
    let cidadedigitado = prompt('Digite sua cidade')
    cidade.textContent = 'Cidade: ' + cidadedigitado

    const media = document.getElementById('Media')
    let mediadigitado = prompt('Digite sua media')
    media.textContent = 'Media: ' + mediadigitado

    if( mediadigitado<5){
        media.classList.add('vermelho')
    }else if(mediadigitado>5){
        media.classList.add('azul')
    }
}

const botaoCadastrar = document.getElementById('cadastrar')
botaoCadastrar.addEventListener('click', cadastrar)

    
