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