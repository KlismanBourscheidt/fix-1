// Chico tem 1,50 metros e cresce 2 cemtímetros por ano, enquanto Zé tem 1,10 metro e cresce 3 centimentros por ano
const prompt = require('prompt-sync')()

function alturaAnual(){
    const nomeChico = 'Chico'
    const nomeZe = 'Zé'
    
    let anos = Number(prompt('Digite a o ano para fazer uma estimativa da altura: '))
    let alturaChico = Number(1.50)
    let alturaZe = Number(1.10)

    for(let i = 0; i < anos; i++){
        alturaChico += 0.02
        alturaZe += 0.03
        console.log(`${nomeChico} tem sua altura ${alturaChico.toFixed(2)}`)
        console.log(`${nomeZe} tem sua altura ${alturaZe.toFixed(2)}`)
    }

    if(alturaZe < alturaChico){
        console.log(`${nomeZe} vai mais alguns anos para crescer mais que o Chico`)
    }else if(alturaZe > alturaChico){
        console.log(`${nomeZe} está maior que chico`)
    }else{
        console.log(`Digite um numero valido`)
    }
}
alturaAnual()
