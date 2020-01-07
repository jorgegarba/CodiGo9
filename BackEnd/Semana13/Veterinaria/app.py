from flask import Flask
from flask_restful import Api
from bd import bd
from flask_cors import CORS

# Solamente se crean las tablas siempre y cuando sean llamadas, ya sea directamente al modelo o al controlador
from models.horario import HorarioModel
from models.usuario import UsuarioModel

app = Flask(__name__)
CORS(app)
#dialect://user:password@domain/database
app.config['SQLALCHEMY_DATABASE_URI']="mysql://root:root@localhost/veterinaria"

api = Api(app)
@app.route('/')
def endpoint_inicial():
    return 'La API REST funciona! :D'


@app.before_first_request
def crear_base_de_datos():
    # PARA INICIALIZAR EL SQLALCHEMY
    bd.init_app(app)
    # PARA BAJARME TODAS LAS TABLAS (DROP)
    # bd.drop_all(app=app)
    # PARA CREAR TODAS LAS TABLAS 
    bd.create_all(app=app)

if __name__=="__main__":
    app.run(debug=True)