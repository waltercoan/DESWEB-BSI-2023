function soma(a,b){
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            resolve( a + b )
        }, 500);
    })
}
/*const resultado = soma(2,2).then(function(result){
    console.log(result)
})
console.log(resultado)
*/
(async function(){
    const result = await soma(2,2)
    console.log(result)
})();