from flask import Flask
from flask_restful import Api
from bd import bd
# from models.categoria import CategoriaModel
from controllers.categoria import CategoriaController
from models.producto import ProductoModel
app = Flask(__name__)
# mysql://usuario:password@server/bd
app.config['SQLALCHEMY_DATABASE_URI']="mysql://root:root@localhost/milibreria"
api = Api(app)
@app.route('/')
def inicio():
    return 'La API con SQL ALCHEMY funciona! :D'

@app.before_first_request
def creacion_tablas():
    # primero tengo que inicializar mi conexion a mi base de datos guardada en app.config y pasarsela a mi bd
    bd.init_app(app)
    # drop_all hacer una eliminacion de los modelos seleccionados, si no especificamos que modelos queremos eliminar por el bind, eliminara todos, obviamente sus datos tambien y como segundo parametro a que aplicacion va a hacer caso
    # bd.drop_all(app=app)
    # luego genero la creacion de mis tablas, si no especificos cuales quiero crear por el parametro bind, creara todos los modelos definidos, y como segundo parametro tengo que mandar mi aplicacion ya inicializada
    bd.create_all(app=app)
api.add_resource(CategoriaController,'/categoria/<string:nombre>','/categoria')


if __name__=='__main__':
    app.run(debug=True)