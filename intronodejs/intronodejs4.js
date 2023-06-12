function soma(a, b){
    setTimeout(function (){
        return a + b
    }, 500)
    // return undefined (implicito)
}

const result = soma(2,2)
console.log(result)