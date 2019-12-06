# pip install flask-restful
from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS

app = Flask(__name__)
# CORS => controlar el acceso a nuestra API, por defecto esta restringida para todo tipo de acceso
# CORS(app) => estamos dando acceso a cualquier origen, a todo tipo de dominio 
CORS(app)

# que todos mis recursos que tenga el endpoint /item/.... va a ser accesible unicamente por el origen que tenga el dominio "http://mipagina.com"
CORS(app, resources={
    r"/*":{
        "origins": "mipagina.com"
    },
    r"/item/*":{
        "origins":"otrapagina.com"
    }
    })
api = Api(app)
items = [
    {
        "nombre":"Leche",
        "precio":3.80
    }
]
class Item(Resource):
    # @app.route('/traeritems', methods=['GET'])
    # self se usa para referirse a la instancia de la clase, en otros lenguajes se le conoce como this
    # Por cada clase solamente puede haber un unico metodo get,post,put,delete,etc.
    def get(self,nombre):
        for item in items:
            if item['nombre']==nombre:
                return item,202
        return {'message':'No se encontro el item'},404

    def post(self):
        # automaticamente transforma un json a un dict
        data = request.get_json()
        print(data)
        # if(data.__contains__(precio))
        itemTemporal = {
            "nombre": data['nombre'],
            "precio": data['precio']
        }
        items.append(itemTemporal)
        return items

    def put(self,id):
        data = request.get_json()
        if len(items)<=id:
            return {
                'message':'El item no existe'
            },404
        items[id]['nombre']=data['nombre']
        items[id]['precio']=data['precio']
        return items[id]

    def delete(self,id):
        if len(items)<=id:
            # Para eliminar un dato de una lista se pueden usar 3 metodos
            # .pop(posicion)
            # .remove(posicion)
            # del list[posicion]
            # del => elimina la variable y libera el espacio de memoria
            return {
                'message':'No se encontro el producto a eliminar'
            },404
        items.pop(id)
        return {
            'message':'Se elimino exitosamente el item',
            'content':items
        },200

class Inicio(Resource):
    def get(self):
        # Ya no se necesita usar jsonify porque automaticamente Resource convierte un diccionario a un JSON
        return 'HOLA MUNDO'
# con Flask-restful ya no necesitamos poner decoradores, solamente se le pasa como un parametro a add_resource
# add_resource => agregar un endpoint a nuestra API y lo hace mas facil de manejar
# los recursos agregados siempre van al final y antes del main
api.add_resource(Inicio,'/')
api.add_resource(Item,'/item','/item/<string:nombre>','/item/<int:id>')
# http://127.0.0.1:5000

if __name__=="__main__":
    app.run(debug=True)
