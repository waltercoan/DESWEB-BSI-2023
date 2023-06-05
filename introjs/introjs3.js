//FUNÇÃO anônima e auto executável
//Função = Bloco de codigo com nome
//VAR = variavel hoisting (elevação/içamento)
void function() {
    console.log(mensagem)
}()
var mensagem = "teste"

function soma(a, b){
    return a + b
}
var resultado = soma(2,2)
console.log(resultado)

//let - declara variaveis de escopo de bloco
//escopo - tempo de vida de uma variavel
var exibeMsn = function(){
    if(true){
        var escopoFuncao = 'Caelum'
        let escopoBloco = 'Alura'
        console.log(escopoBloco)
    }
    console.log(escopoFuncao) 
}
//console.log(exibeMsn)
exibeMsn()

//const - cria constantes
void function(){
    const msg = 'alura'
    console.log(msg)
    //msg = 'Caelum'
}()

let estado = 'sc'
switch(estado){
    case 'SC': case 'sc':
        console.log("Santa Catarina")
    break
    case 'PR':
        console.log("Paraná")
    break
    default:
        console.log("Não definido")
}


cont = 0
while(cont < 10){
    console.log(cont)
    //cont = cont + 1
    //cont += 1
    cont ++
}

let quandovale = 0
console.log(quandovale++)
console.log(++quandovale)

let i = 10
do{
    console.log('entrou')
}while(i < 10)