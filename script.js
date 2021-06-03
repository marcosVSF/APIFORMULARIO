const resumo = document.querySelector ('#resumo')

const contador = document.querySelector ('#contador')

contador.innerHTML = 255 

resumo.addEventListener('keyup' , function() {
    contador.innerHTML = 255 - resumo.value.length
})

const horario = document.querySelector('#horario')

fetch('https://servicodados.ibge.gov.br/api/v1/projecoes/populacao/BR').then(function(resposta){
    resposta.json().then(function(dados){
        horario.innerHTML =(dados.horario)
})
    })