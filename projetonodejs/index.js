const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const path = require('path')
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({ extended:false}))
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

app.get('/clientes/novo', function(req,res){
  res.render('cliente/formcliente')
})

app.post('/clientes/save', function(req,res){
  
  //procurar pelo cliente no fakedata
  let clienteantigo = 
      fakedata.find(o => o.id == req.body.id)

  if(clienteantigo != undefined){
    clienteantigo.nome = req.body.nome
    clienteantigo.endereco = req.body.endereco
    clienteantigo.sexo = req.body.sexo
    clienteantigo.telefone = req.body.telefone
  }else{
    let maiorId = Math.max(...fakedata.map(o => o.id))
    let novoCliente = {
      id: maiorId + 1,
      nome: req.body.nome,
      endereco: req.body.endereco,
      sexo: req.body.sexo,
      telefone: req.body.telefone
    }
    fakedata.push(novoCliente)
  }
  res.redirect('/clientes')
})

app.get('/clientes/alterar/:id', function(req,res){
  let id = req.params['id']
  
  //Procura um cliente pelo id
  let umcliente = fakedata.find(o => o.id == id)
  
  res.render('cliente/formcliente', {cliente: umcliente})
})


app.listen(80,()=>{
  console.log('Servidor rodando...')  
  console.log('http://localhost/')
})