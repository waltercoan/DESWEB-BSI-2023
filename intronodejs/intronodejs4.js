function soma(a, b, func_callback){
    console.log("inicio")
    setTimeout(function (){
        console.log("SOMA")
        func_callback(a + b)
    }, 1000)
    console.log("fim")
    // return undefined (implicito)
}

const result = soma(2,2, function(total){
    console.log("CALLBACK")
    console.log('Total: ' + total)
    soma(total,250,function(total){
        console.log(total)
        soma(total,10,function(r){
            console.log(r)
        })
    })
})
console.log(result)