from flask import Flask, request

app = Flask(__name__)

@app.route("/",methods=['POST'])
def index():
    #dados = request.args
    usuario = request.form.get('usuario')
    senha = request.form.get('senha')
    datanascimento = request.form.get('datanascimento')
    chocolate = request.form.get('chocolate')
    coquinha = request.form.get('coquinha')
    sexo = request.form.get('sexo')
    cores = request.form.get('cores')
    texto = request.form.get('texto')
    return f"<h1>{usuario}</h1><h1>{senha}</h1> \
        {datanascimento}Chocolate: {chocolate} \
        Coquinha: {coquinha} Sexo: {sexo} \
        Cores: {cores} Texto: {texto}" 

@app.route("/formulario")
def formulario():
    return '''
        <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <form action="http://localhost:5000/" method="POST">
            <fieldset>
                <label for="txtusuario">Usuario</label>
                <input type="email"
                    id="txtusuario"
                    name="usuario"
                    placeholder="Digite seu nome">
            </fieldset>
            <fieldset>
                <label for="txtsenha">Senha</label>
                <input type="password" 
                    name="senha"
                    id="txtsenha">
            </fieldset>
            <fieldset>
                <input type="date" name="datanascimento" required>
            </fieldset>
            <fieldset>
                <input type="checkbox" name="chocolate">Chocolate
                <input type="checkbox" name="coquinha">Coca-Cola
            </fieldset>
            <fieldset>
                <input type="radio" name="sexo" value="masc">Masculino
                <input type="radio" name="sexo" value="fem">Feminino
            </fieldset>
            <fieldset>
                <input type="text" name="textofixo" 
                value="ta vendo q nao altera"
                readonly="readonly" disabled>
            </fieldset>
            <fieldset>
                <select name="cores">
                    <option value="1">Azul</option>
                    <option value="2">Verde</option>
                    <option value="3">Vermelho</option>
                </select>
            </fieldset>
            <fieldset>
                <textarea rows="10" 
                cols="30" name="texto"></textarea> 
            </fieldset>
            <input type="submit">
            <!--
                <button type="submit">Enviar</button>
            -->
        </form>
    </body>
</html>
    '''