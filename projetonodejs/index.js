const express = require('express')
const app = express()
const { engine } = require('express-handlebars')


app.set('view engine', 'handlebars')
app.engine('handlebars', engine(''))


app.get('/',function(req,res){
    //res.send('<h1>Eu não acredito</h1>')
    res.render('index')
})

app.listen(80,()=>{
  console.log('Servidor rodando...')  
  console.log('http://localhost/')
})