# pip install flask-restful
from flask import Flask, request
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)
items = []
class Item(Resource):
    # @app.route('/traeritems', methods=['GET'])
    # self se usa para referirse a la instancia de la clase, en otros lenguajes se le conoce como this
    def get(self):
        return {'message':'Bienvenido'}

class Inicio(Resource):
    def get(self):
        # Ya no se necesita usar jsonify porque automaticamente Resource convierte un diccionario a un JSON
        return 'HOLA MUNDO'
# con Flask-restful ya no necesitamos poner decoradores, solamente se le pasa como un parametro a add_resource
# add_resource => agregar un endpoint a nuestra API y lo hace mas facil de manejar
api.add_resource(Inicio,'/')
api.add_resource(Item,'/item')
# http://127.0.0.1:5000

if __name__=="__main__":
    app.run(debug=True)
