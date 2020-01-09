from flask_restful import Resource, reqparse
from models.mascota import MascotaModel

class MascotaController(Resource):
    def post(self):
        """Metodo que permite la creacion de una mascota"""
        parser = reqparse.RequestParser()
        parser.add_argument(
            "nombre",
            type=str,
            required=True,
            help="Falta el nombre"
        )
        parser.add_argument(
            "fecha",
            type=str,
            required=True,
            help="Falta la fecha"
        )
        parser.add_argument(
            "tipo",
            type=str,
            required=True,
            help="Falta el tipo"
        )
        parser.add_argument(
            "raza",
            type=str,
            required=True,
            help="Falta la raza"
        )
        parser.add_argument(
            "sexo",
            type=str,
            required=True,
            help="Se requiere el sexo"
        )
        parser.add_argument(
            "observaciones",
            type=str,
            required=True,
            help="Se requiere las observaciones"
        )
        parser.add_argument(
            "id_usuario",
            type=int,
            required=True,
            help="Se requiere el id de usuario"
        )
        data = parser.parse_args()
        mascota = MascotaModel(data['nombre'],data['fecha'],data['tipo'],data['raza'],data['sexo'],data['id_usuario'],data['observaciones'])
        try:
            mascota.guardar_bd()
        except:
            return {
                'message': 'Hubo un error al guardar en la base de datos, vuelva a intentar'
            },500
        return mascota.retornar_mascota()


    def get(self,id_usuario):
        """Metodo que permite traer todas las mascotas de un mismo dueño"""
        resultado = MascotaModel.query.filter_by(usu_id=id_usuario).all()
        if resultado:
            resultadoFinal=[]
            for mascota in resultado:
                resultadoFinal.append(mascota.retornar_mascota())
            return resultadoFinal,200
        else:
            return {
                'message':'El usuario no tiene ninguna mascota, ingresela primero'
            },404


    def put(self,id_mascota):
        """Metodo que permite actualizar una mascota segun su id"""
        parser = reqparse.RequestParser()
        parser.add_argument(
            "observaciones",
            type=str,
            required=False
        )
        parser.add_argument(
            "nombre",
            type=str,
            required=False
        )
        parser.add_argument(
            "tipo",
            type=str,
            required=False
        )
        parser.add_argument(
            "raza",
            type=str,
            required=False
        )
        parser.add_argument(
            "sexo",
            type=str,
            required=False
        )
        data = parser.parse_args()
        resultado = MascotaModel.query.filter_by(mascota_id=id_mascota).first()
        if resultado:
            try:
                resultado.actualizar_mascota(data['nombre'],data['tipo'],data['raza'],data['sexo'],data['observaciones'])
            except:
                return{
                    'message':'Hubo un error al actualizar la mascota, intentelo de nuevo mas tarde'
                },500
            return {
                'message':'Se actualizaron los datos exitosamente'
            },200
        return{
            'message':'No se encontro la mascota'
        },404