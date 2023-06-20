const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const path = require('path')


app.set('view engine', 'handlebars')
app.engine('handlebars', engine(''))


app.use('/css', express.static(path.join(__dirname,'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname,'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname,'node_modules/jquery/dist')))
app.use('/public', express.static(path.join(__dirname,'public')))

const fakedata = [
  {
      id: 1,
      nome: 'Zezinho da Silva',
      endereco: 'Rua lalalala 100',
      sexo: 'Masculino',
      telefone: '5555-1234'
  },
  {
    id: 2,
    nome: 'Mariazinha',
    endereco: 'Rua lelleelel 200',
    sexo: 'Feminino',
    telefone: '5555-5432'
  }
]



app.get('/',function(req,res){
    //res.send('<h1>Eu não acredito</h1>')
    res.render('index')
})

app.get('/clientes',function(req,res){
  res.render('cliente/cliente', 
      {listaclientes: fakedata})
})


app.listen(80,()=>{
  console.log('Servidor rodando...')  
  console.log('http://localhost/')
})