from flask_restful import Resource, reqparse
from models.registro import RegistroModel
from models.usuario import UsuarioModel

class RegistroController(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument(
            "hora_ingreso",
            type=str,
            required=True,
            help="Se requiere la hora de ingreso"
        )
        parser.add_argument(
            "hora_salida",
            type=str,
            required=True,
            help="Se requiere la hora de salida"
        )
        parser.add_argument(
            "usuario",
            type=int,
            required=True,
            help="Se requiere el id de usuario"
        )
        data = parser.parse_args()
        ingreso = RegistroModel(data['hora_ingreso'],data['hora_salida'],data['usuario'])
        try:
            ingreso.guardar_bd()
        except :
            return {
                'message':'Hubo un error al guardar en la base de datos'
            }
        return ingreso.horario_marcado()
    def get(self, mes, anio, usuario):
        if(int(mes)<10):
            mes='0'+mes
        resultado = RegistroModel.query.filter(RegistroModel.registro_salida.like(anio+'-%')).filter(RegistroModel.registro_salida.like('%-'+mes+'-%')).filter(RegistroModel.usu_id == usuario).all()
        if resultado:
            arrFinal = []
            for marcacion in resultado:
                arrFinal.append(marcacion.horario_marcado())
            print(resultado)
            return {
                'resultado':arrFinal
            }
        return {
            'message':'El usuario no tiene ningun registro hasta la fecha'
        },200
