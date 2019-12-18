from flask_restful import Api, Resource 
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
# ESTAMOS DEFINIENDO que todos los dominios puedan acceder a nuestra api
CORS(app)

# En el siguiente codigo determinamos que solamente la ruta /login pueda ser accedida por el dominio google.com

# https://flask-cors.readthedocs.io/en/latest/

CORS(app, resources={
    '/login':{"origins":"google.com"},
    '/pedidos':{"origins":"*"},
    '*':{"origins":'*'}
})

if __name__=="__main__":
    app.run(debug=True)