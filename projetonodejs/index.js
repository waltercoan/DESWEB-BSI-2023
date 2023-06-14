const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send('<h1>Eu não acredito</h1>')
})

app.listen(80,()=>{
  console.log('Servidor rodando...')  
  console.log('http://localhost/')
})