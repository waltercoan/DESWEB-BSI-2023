//variável do tipo number - inteiro
a = 10
console.log(a + " - " + typeof(a))
//variável do tipo number - decimal
a = 20.5
console.log(a + " - " + typeof(a))
console.log("sao iguais:" + (a == 20.5))
//compara os valores
console.log("sao iguais:" + (a == "20.5"))
//compara os valores e os tipos ===
console.log("sao iguais:" + (a === "20.5"))
//Tipo texto
a = "zezinho"
console.log(a + " - " + typeof(a))
//Tipo lógico
a = true
console.log(a + " - " + typeof(a))
console.log("sao iguais:" + (a == "1"))
//tipo lista
nomes = ['zezinho', 'luizinho', 'huguinho']
console.log(nomes[0])
console.log(nomes[1])
console.log(nomes + " - " + typeof(nomes))

//tipo objeto
pessoa = new Object();
pessoa.nome = "zezinho"
pessoa.idade = 22
console.log(pessoa + " - " + typeof(pessoa))

//tipo funcao
meucodigo = function(){
    console.log("eu nao acredito")
}
meucodigo()
console.log(meucodigo + " - " + typeof(meucodigo))

cont = 0
while(cont < 10){
    console.log(cont)
    //cont = cont + 1
    //cont += 1
    cont++
}

qualvalor = 0
//operador de incremento POS FIXADO
console.log(qualvalor++)
//operador de incremento PRE FIXADO
console.log(++qualvalor)

cont = 10
do{
    console.log("rodando")
    cont ++
}while(cont < 10)

for(i=0;i<10;i++){
    console.log("Contado: " + i)
}

