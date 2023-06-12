function infinito(){
    let i = 0
    setInterval(function(){
        console.log(i++)
    },500)
}
function data(){
    console.log(new Date())
}
infinito()
data()