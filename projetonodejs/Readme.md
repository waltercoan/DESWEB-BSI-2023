# Projeto CRUD (Create/Read/Update/Delete) em NodeJS

## Configuração do ambiente
- Criou uma pasta chamada projetonodejs
- Abrimos o terminal, digitamos cd projetonodejs
- Digitar: npm init
- Teclar ENTER em todas as opções, resultado o NPM vai criar um arquivo chamado package.json
- Instalar a biblioteca do Express, digitar: npm install express
- Criar um arquivo chamado index.js na pasta do projeto

## Desenvolver o codigo inicial da aplicação
- No arquivo index.js foi inserido o seguinte código
```
//importa a biblioteca do express
const express = require('express')
//executa o express
const app = express()

//registrando um endereço principal
//da aplicação e retornando um texto
app.get('/',function(req,res){
    res.send('Eu não acredito')
})

//inicializando o servidor WEB
//na porta 80
app.listen(80,()=>{
  console.log('Servidor rodando...')  
  console.log('http://localhost/')
})
```

## Instalar as dependencias do projeto
- Digitar npm install body-parser
- Digitar npm install bootstrap
- Digitar npm install express-handlebars
- Digitar npm install jquery

## Configurando o cola (binding) do HTML com o NodeJS
[Link do handle bars](https://handlebarsjs.com/)

```
const express = require('express')
const app = express()
//Importando a engine do Handlebars
const { engine } = require('express-handlebars')

//Aplicando a engine do handlebars
app.set('view engine', 'handlebars')
app.engine('handlebars', engine(''))

app.get('/',function(req,res){
    res.send('<h1>Eu não acredito</h1>')
})

app.listen(80,()=>{
  console.log('Servidor rodando...')  
  console.log('http://localhost/')
})
```

- Criar a pasta views dentro do projeto
- Criar a pasta layouts dentro da pasta views
- Criar dentro da pasta views o arquivo index.handlebars

```
<h1>Página principal</h1>
```

- Criar dentro da pasta views->layouts o arquivo main.handlebars

```
<!DOCTYPE html>
<html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        {{{body}}}
    </body>
</html>
```

- Alterar o codigo do index.js para renderizar o arquivo index.handlebars

```
app.get('/',function(req,res){
    //res.send('<h1>Eu não acredito</h1>')
    res.render('index')
})
```

## Instalar o Bootstrap

- Importar a biblioteca path do NodeJS
```
const path = require('path')
```
- Inserir o codigo abaixo no arquivo index.js depois do handlebars. Esse código faz com que o NodeJS disponibilize o acesso aos arquivos estáticos (CSS/JS) do Bootstrap e do JQuery
```
app.use('/css', express.static(path.join(__dirname,'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname,'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname,'node_modules/jquery/dist')))
app.use('/public', express.static(path.join(__dirname,'public')))`
```

- Alteramos o arquivo views->layouts->main.handlebars para linkar os arquivos css do Bootstrap
```
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/public/site.css">
```

- Alteramos o arquivo views->layouts->main.handlebars para carregar os scripts Javascript

```
<script src="/js/bootstrap.min.js"></script>
<script src="/js/jquery.js"></script>
```

- Alteramos o arquivo views->layouts->main.handlebars incluir a tag main com a classe container para que os componentes do Bootstrap sejam carregados corretamente.

```
<main class="container">
    {{{body}}}
</main>
```

- Escolher um modelo de  [menu do bootstrap](https://getbootstrap.com/docs/5.3/components/navbar/) e incluir o código HTML no arquivo views->layouts->main.handlebars

## Criando a tela de listagem do cliente
- Alterar o arquivo index.js para incluir o código abaixo para ao acessar a rota /clientes e carregar o html da tela do cliente

```
app.get('/clientes',function(req,res){
  res.render('cliente/cliente')
})
```
- Dentro da pasta views criar uma pasta chamada cliente

- Dentro da pasta views->cliente criar um arquivo cliente.handlebars

- Código inicial da tela de cliente

```
<h1>Clientes</h1>
<hr>
<table class="table">
    <!-- Títulos da tabela -->
    <thead> 
        <tr> <!-- tr - Table Row(linha) -->
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Sexo</th>
            <th>Telefone</th>
        </tr>    
    </thead>
    <!-- Conteúdo da tabela -->
    <tbody>
        <tr> <!-- tr - Table Row(linha) -->
            <td>01</td> <!-- td - Table Data(dados) -->
            <td>Zezinho da Silva</td>
            <td>Rua lalala 100</td>
            <td>Masculino</td>
            <td>5555-1234</td>
        </tr>
    </tbody>
</table>
```

- Executar o projeto com o comando node index.js e acessar o endereço  [http://localhost/clientes](http://localhost/clientes) e testar se a tabela estática de clientes é apresentada na tela

### Tornando a tabela de clientes dinâmica

- No arquivo index.js, criar uma variável chamada fakedata com uma lista de objetos JSON com os dados dos clientes

```
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
```

- Alterar o código que carrega a tela dos clientes para além de carregar a tela, enviar os dados da variável fakedata para a tela

```
app.get('/clientes',function(req,res){
  res.render('cliente/cliente', 
      {listaclientes: fakedata})
})
```

- Alterar o código HTML do arquivo cliente.handlebars para receber a lista de clientes e fazer um laço de repetição FOR para inserir os dados dos clientes no layout da tabela do HTML

```
    <!-- Conteúdo da tabela -->
    <tbody>
        {{#each listaclientes}}
        <tr>
            <td>{{this.id}}</td>
            <td>{{this.nome}}</td>
            <td>{{this.endereco}}</td>
            <td>{{this.sexo}}</td>
            <td>{{this.telefone}}</td>
        </tr>
        {{/each}}
    </tbody>
```

### Tela para incluir clientes
- Alterar o arquivo views->cliente->cliente.handlebars para incluir no HTML o link(botão do bootstrap) para o formulário de cadastro novo
```
<a href="./clientes/novo" class="btn btn-primary">Novo</a>
```
- Alterar o arquivo index.js para incluir a nova rota /clientes/novo e carregar o arquivo html com o formulário
```
app.get('/clientes/novo', function(req,res){
  res.render('cliente/formcliente')
})
```
- Criar um novo arquivo chamado formcliente.handlebars dentro da pasta views->cliente
- Construir o código do formulário HTML dentro do arquivo formcliente.handlebars. O tag FORM deve ter como valor do action a rota /clientes/save e utilizar o method POST
```
<h2>Cliente</h2>
<hr>

<form action="/clientes/save" method="POST">
    <div class="form-group">
        <label for="txtnome">Nome:</label>
        <input type="text" class="form-control" 
            id="txtnome" name="nome" required >
    </div>

    <div class="form-group">
        <label for="txtendereco">Endereço:</label>
        <input type="text" class="form-control" 
            id="txtendereco" name="endereco" required >
    </div>

    <div class="form-group">
        <label for="txtsexo">Sexo:</label>
        <input type="text" class="form-control" 
            id="txtsexo" name="sexo" required >
    </div>

    <div class="form-group">
        <label for="txttelefone">Telefon:</label>
        <input type="text" class="form-control" 
            id="txttelefone" name="telefone" required >
    </div>

    <button type="submit" class="btn btn-primary">Enviar</button>
</form>
```
- Alterar o arquivo index.js para importar a biblioteca body-parser e vincular ela ao express
```
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({ extended:false}))
```
- Alterar o arquivo index.js para incluir o código da rota /clientes/save que deverá receber os dados do formulário HTML, criar um novo objeto Javascript, inserir na lista fakedata e redirecionar o cliente para o endereço /clientes
```
app.post('/clientes/save', function(req,res){
  //Encontra o maior valor do campo ID entre todos os clientes
  let maiorId = Math.max(...fakedata.map(o => o.id))
  //Cria um objeto com os dados do formulário
  let novoCliente = {
    id: maiorId + 1,
    nome: req.body.nome,
    endereco: req.body.endereco,
    sexo: req.body.sexo,
    telefone: req.body.telefone
  }
  //Insere o novo cliente na lista fakedata
  fakedata.push(novoCliente)
  //Redireciona o navegador do cliente para a tela /clientes
  res.redirect('/clientes')
})
```

### Tela para alterar clientes
- Alterar o código da tela views->cliente->cliente.handlebars para incluir o botão ALTERAR
```
<td><a href="/clientes/alterar/{{this.id}}" 
            class="btn btn-warning">Alterar</a>
```
- Alterar o código do arquivo index.js para receber a request, procurar o objeto na lista fakedata e retornar o objeto para o formulário 
```
app.get('/clientes/alterar/:id', function(req,res){
  let id = req.params['id']
  
  //Procura um cliente pelo id
  let umcliente = fakedata.find(o => o.id == id)
  
  res.render('cliente/formcliente', {cliente: umcliente})
})
```
- Alterar o código do views->cliente->formcliente.handlebars para fazer o binding dos campos do objeto cliente para os inputs do HTML
```
<h2>Cliente</h2>
<hr>

<form action="/clientes/save" method="POST">

    <div class="form-group">
        <label for="txtnome">Nome:</label>
        <input type="text" class="form-control" 
            <!-- BINDING -->
            value="{{cliente.nome}}"
            id="txtnome" name="nome" required >
    </div>

    <div class="form-group">
        <label for="txtendereco">Endereço:</label>
        <input type="text" class="form-control"
            <!-- BINDING -->         
            value="{{cliente.endereco}}"
            id="txtendereco" name="endereco" required >
    </div>

    <div class="form-group">
        <label for="txtsexo">Sexo:</label>
        <input type="text" class="form-control"
            <!-- BINDING -->
            value="{{cliente.sexo}}"
            id="txtsexo" name="sexo" required >
    </div>

    <div class="form-group">
        <label for="txttelefone">Telefon:</label>
        <input type="text" class="form-control"
            <!-- BINDING -->
            value="{{cliente.telefone}}"
            id="txttelefone" name="telefone" required >
    </div>

    <button type="submit" class="btn btn-primary">Enviar</button>
</form>
```
- Alterar o index.js para que a rota SAVE faça o código de ALTERAR e INCLUIR novos registros
```
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
```
- Alterar o arquivo formcliente.handlebars para incluir um campo do tipo hidden no formulário para enviar o ID do cliente
```
<input type="hidden" name="id" 
    value="{{cliente.id}}">
```

## Construção do Excluir clientes
- Alterar o arquivo views->cliente->cliente.handlebars para incluir o botão de excluir na tabela, depois do código do botão alterar
```
<button data-id="{{this.id}}"
                    class="btn btn-danger js-delete">Excluir</button>
```

- Ainda no arquivo cliente.handlebars depois da tabela incluir o código HTML do bootstrap para desenhar a tela de confirmação de exclusão [modal](https://getbootstrap.com/docs/5.3/components/modal/)

- Neste código a div do modal deve ter um id="meumodal"
- O título e a mensagem devem ser incluído na modal
- O botão SIM deve ter o id="btnsim"
```
<div class="modal" tabindex="-1" id="meumodal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Excluir cliente</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Confirma a exclusão do cliente?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary" id="btnsim">SIM</button>
      </div>
    </div>
  </div>
</div>
```

- Ainda no arquivo cliente.handlebars no final do arquivo incluir a tag script para importar os arquivos JavaScript

```
<script src="/js/jquery.min.js"></script>
<script src="/public/site.js"></script>
```

- Criar dentro do projeto a pasta public, e dentro desta pasta criar o arquivo site.js

- No arquivo public->site.js incluir o seguinte codigo Javascript
```
//Criar uma função JavaScript autoexecutavel
(function(){
    //procura na tela se tem um id="clientes"
    //coloque evento click no elemento com
    //a class js-delete
    $('#clientes').on('click','.js-delete',function(){
        //callback
        let botaoclicado = $(this) //jquery recupere botaoclicado
        //copia o id do cliente escondido no botao excluir para o botao sim
        $('#btnsim').attr('data-id', botaoclicado.attr('data-id'))
        //abre a tela de confirmação da exclusão
        $('#meumodal').modal('show')
    })
    //procura na tela o botao SIM
    //coloca um evento de click no botao sim
    $('#btnsim').on('click',function(){
        //receber a referencia do botao sim
        let botaosim = $(this)
        //recuperar de dentro do botao sim o codigo do cliente
        let idcliente = botaosim.attr('data-id')
        // chamar o backend da aplicação para remover o cliente
        $.ajax({
            url: '/clientes/delete/' + idcliente, //no endereco de deletar
            method: 'GET', //metodo do protocolo http GET
            success: function() {
                window.location.href='/clientes' //em caso de sucesso volte para o inicio
            }
        })
    })
})()
```

- Alterar o código do arquivo index.js para incluir a rota para remover um cliente da variável fakedata
```
app.get('/clientes/delete/:id', function(req,res){
    //código para excluir o cliente no backend
    //procurar pelo cliente no fakedata
    let umcliente = fakedata.find(o => o.id == req.params['id'])
    let posicaocli = fakedata.indexOf(umcliente)
    if(posicaocli > -1){ //testando se eu achei o cliente
        fakedata.splice(posicaocli,1)
    }
    res.redirect('/clientes')
})
```