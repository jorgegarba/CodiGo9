from flask_restful import Resource, reqparse
from models.precio import PrecioModel
from sqlalchemy import or_, and_
class PrecioController(Resource):
    # atributos de la clase
    parser = reqparse.RequestParser()
    parser.add_argument(
        "descripcion",
        type=str,
        required=True,
        help="Falta la descripcion"
    )
    parser.add_argument(
        "precio",
        type=float,
        required=True,
        help="Falta el precio"
    )
    # metodos de la clase
    def get(self, palabra):
        """Metodo get para traer todos los precios por una coincidencia en su descripcion"""
        resultado = PrecioModel.query.filter(PrecioModel.descripcion.like('% '+palabra+' %')).all()
        # el metodo AND es un metodo implicito que cuando nosotros dentro del filter ponemos dos comparativas separas por coma estas comparativas tienen que ser verdaderas ambas, ejemplo:
        # PrecioModel.query.filter(PrecioModel.descripcion=='palabra',PrecioModel.precio=='5.70').all()
        # el metodo AND tambien se puede importar y su uso seria el siguiente
        # PrecioModel.query.filter(and_(PrecioModel.descripcion=='palabra',PrecioModel.precio=='5.70')).all()
        # dentro del filter se usar el metodo or_ y dentro de sus parametros van todas las comparativas que quieremos comparar, obviamente al ser or solamente una de ellas tiene que ser verdadera para que cumpla con la condicion, ejemplo
        # PrecioModel.query.filter(or_(PrecioModel.descripcion=='palabra',PrecioModel.id==5)).limit(3)
        if resultado:
            lista_precios = []
            for precio in resultado:
                print(precio.atenciones)
                lista_precios.append(precio.retornar_precio())
            return {
                'precios':lista_precios
            },200
        return{
            'message':'No se encontraron precios que coincidan con '+palabra
        },404
    def post(self):
        """Metodo para agregar un nuevo precio"""
        data = self.parser.parse_args()
        nuevo_precio = PrecioModel(data['descripcion'],data['precio'])
        try:
            nuevo_precio.guardar_bd()
        except:
            return {
                'message':'Hubo un error al almacenar el precio'
            },500
        return nuevo_precio.retornar_precio(),201
    def put(self, id_precio):
        """Metodo para actualizar un precio"""
        resultado = PrecioModel.query.filter_by(precio_id = id_precio).first()
        data = self.parser.parse_args()
        try:
            resultado.actualizar_precio(data['descripcion'],data['precio'])
        except:
            return {
                'message':'Hubo un error al actualizar el precio'
            }
        return resultado.retornar_precio(), 200


class PreciosController(Resource):
    def get(self):
        """Metodo para devolver toda la lista de precios"""
        resultado = PrecioModel.query.all()
        # [<PrecioModel 1>, <PrecioModel 2>, ....]
        # __str___
        # ['baño 15.00', 'desparazitacion 20.00' ,'eutanisia 80.00']
        if resultado:
            lista_precios=[]
            for precio in resultado:
                lista_precios.append(precio.retornar_precio())
            return {
                'precios':lista_precios
            },200
        return {
            'message': 'No hay precios'
        }, 404