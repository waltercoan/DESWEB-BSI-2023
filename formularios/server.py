##Instalar a dependência do Flask
## pip install flask
## Rodar o server
## flask --app server run
from flask import Flask, request

app = Flask(__name__)

@app.route("/")
def hello_world():
    dados = request.args
    return f"<p>Nome {dados['nome']}</p>"