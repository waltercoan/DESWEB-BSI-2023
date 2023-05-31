
var refdisplay = document.getElementById('display')
function botaoClicado(numero){
    console.log(numero)
    refdisplay.value += numero
}
function resultado(){
    refdisplay.value = eval(refdisplay.value)
}
function limpar(){
    refdisplay.value = " "
}
function backspace(){
    console.log("Tamanho: " + refdisplay.value.length)
    refdisplay.value = refdisplay.value.substring(0,refdisplay.value.length-1)
}
/*refdisplay.value += " " */