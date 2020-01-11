from flask_restful import Resource, reqparse
from models.triaje import TriajeModel

class TriajeController(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument(
            'peso',
            type=float,
            required=True,
            help='Falta el peso'
        )
        parser.add_argument(
            'temperatura',
            type=float,
            required=True,
            help='Falta la temperatura'
        )
        parser.add_argument(
            'atencion',
            type=int,
            required=True,
            help='Falta el id de atencion'
        )
        data = parser.parse_args()
        ingreso = TriajeModel(data['peso'],data['temperatura'],data['atencion'])
        try:
            ingreso.guardar_bd()
        except:
            return {
                'message':'No se pudo ingresar el triaje'
            },500
        return ingreso.devolver_triaje()

    def get(self,id_atencion):
        resultado = TriajeModel.query.filter_by(atencion_id=id_atencion).first()
        # .first() => devuelva la primera
        # .limit(7) => devuelve las 7 primeras
        # .all() => devuelve todas las coincidencias
        # first devuelve un objeto y todas las demas devuelven una lista de objetos
        if resultado:
            return {
                'triaje': resultado.devolver_triaje()
            },200
        return {
            'message':'No se encontro el triaje'
        },404

    def put(self, id_triaje):
        parser = reqparse.RequestParser()
        parser.add_argument(
            "peso",
            type=float,
            required=True,
            help="Falta el peso"
        )
        parser.add_argument(
            "temperatura",
            type=float,
            required=True,
            help="Falta la temperatura"
        )
        data = parser.parse_args()
        actualizacion = TriajeModel.query.filter_by(id=id_triaje).first()
        try:
            actualizacion.actualizar_triaje(data['peso'],data['temperatura'])
        except:
            return {
                'message':'Hubo un error al actualizar el triaje, intentelo de nuevo mas tarde'
            },500
        return {
            'message':'Triaje actualizado con exito'
        },200