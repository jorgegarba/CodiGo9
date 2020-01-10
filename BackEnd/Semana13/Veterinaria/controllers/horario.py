from flask_restful import Resource, reqparse
from models.horario import HorarioModel
from models.usuario import UsuarioModel

class HorarioController(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument(
            "fecha_inicio",
            type=str,
            required=True,
            help="Se requiere la fecha de inicio"
        )
        parser.add_argument(
            "fecha_fin",
            type=str,
            required=True,
            help="Se requiere la fecha de fin"
        )
        parser.add_argument(
            "hora_ingreso",
            type=str,
            required=True,
            help="Se requiere la hora de ingreso"
        )
        parser.add_argument(
            "hora_salida",
            type=str,
            required=False
        )
        parser.add_argument(
            "usuario",
            type=int,
            required=True,
            help="Se requiere el id de usuario"
        )