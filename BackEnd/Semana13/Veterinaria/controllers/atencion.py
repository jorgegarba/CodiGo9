from flask_restful import Resource, reqparse
from models.atencion import AtencionModel

class AtencionController (Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument(
            "fecha",
            type=str,
            required=True,
            help="Falta la fecha"
        )
        parser.add_argument(
            "motivo",
            type=str,
            required=True,
            help="Falta el motivo"
        )
        parser.add_argument(
            "diagnostico",
            type=str,
            required=True,
            help="Falta el diagnostico"
        )
        parser.add_argument(
            "medicacion",
            type=str,
            required=True,
            help="Falta la medicacion"
        )
        parser.add_argument(
            "proxima_fecha",
            type=str,
            required=True,
            help="Falta la proxima fecha"
        )
        parser.add_argument(
            "observaciones",
            type=str,
            required=True,
            help="Falta las observaciones"
        )
        parser.add_argument(
            "id_mascota",
            type=int,
            required=True,
            help="Falta el id_mascota"
        )
        parser.add_argument(
            "id_precio",
            type=int,
            required=True,
            help="Falta el id_precio"
        )
        data = parser.parse_args()
        atencion = AtencionModel(data['fecha'],data['motivo'],data['diagnostico'],data['medicacion'],data['proxima_fecha'],data['observaciones'],data['id_mascota'],data['id_precio'])
        try:
            atencion.guardar_bd()
        except:
            return{
                'message':'Hubo un error al guardar la atencion en la base de datos'
            },500
        return atencion.traer_atencion(),201

    def get(self, id_mascota):
        resultado = AtencionModel.query.filter_by(mascota_id= id_mascota).all()
        if resultado:
            atenciones =[]
            for atencion in resultado:
                atenciones.append(atencion.traer_atencion())
            return {
                'atenciones':atenciones
            },200
        return{
            'message':'Esa mascota no tiene atenciones'
        },404
