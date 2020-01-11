from flask import Flask
from flask_restful import Api
from bd import bd
from flask_cors import CORS

# Solamente se crean las tablas siempre y cuando sean llamadas, ya sea directamente al modelo o al controlador
# from models.registro import RegistroModel
from controllers.registro import RegistroController
# from models.mascota import MascotaModel
from controllers.mascota import MascotaController, MascotasController
# from models.usuario import UsuarioModel
from controllers.usuario import UsuarioController, Login
# from models.atencion import AtencionModel
from controllers.atencion import AtencionController
# from models.triaje import TriajeModel
from controllers.triaje import TriajeController
from models.precio import PrecioModel
from models.detalle_doc import DetalleDocumentoModel
from models.cabecera_doc import CabeceraDocumentoModel
from models.turno import TurnoModel

from flask_jwt import JWT
from seguridad import autenticacion, identificacion


app = Flask(__name__)
CORS(app)
# dialect://user:password@domain/database
app.config['SQLALCHEMY_DATABASE_URI'] = "mysql://root:root@localhost/veterinaria"
app.config['SECRET_KEY']='codigo9'
app.config['JWT_AUTH_URL_RULE']='/login'
from datetime import timedelta
app.config['JWT_EXPIRATION_DELTA']=timedelta(seconds=30)

jsonwebtoken = JWT(app,autenticacion,identificacion)

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


api.add_resource(UsuarioController,
                 '/registro',
                 '/buscar_usuario/<string:nombre>')

# api.add_resource(Login, '/login')
api.add_resource(MascotaController,
                 '/mascota/add',
                 '/mascota/<int:id_usuario>')
api.add_resource(MascotasController, '/mascotas')

api.add_resource(RegistroController,
                 '/marcacion',
                 '/marcacion/<int:anio>/<int:mes>/<int:usuario>')

api.add_resource(TriajeController,
                 '/triaje',
                 '/triaje/<int:id_atencion>',
                 '/triaje/<int:id_triaje>')

api.add_resource(AtencionController,
                 '/atencion',
                 '/atencion/<int:id_mascota>')

if __name__ == "__main__":
    app.run(debug=True)
