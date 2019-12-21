from models.categoria import CategoriaModel
from flask_restful import Resource, reqparse

class CategoriaController(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument(
        "nombre",
        type=str,
        required=True,
        help="Falta el nombre de la categoria"
    )
    def get(self, nombre):
        categoria = CategoriaModel.query.filter_by(nombre=nombre).first()
        if categoria:
            return categoria.devolver_json()
        else:
            return {
                'message':'error',
                'content':'No hay'
                },404
    def post(self):
        data = self.parser.parse_args()
        categoria = CategoriaModel(data['nombre'])
        try:
            categoria.guardar_en_la_bd()
        except :
            return {
                'message':'error',
                'content':'Hubo un error al guardar en la base de datos'
            },500
        return categoria.devolver_json(),418