from flask_restful import Resource, Api, reqparse
# reqparse => nos va a validar que nuestra informacion solicitada cumpla con los requerimientos
from bd import mysql, app
# pip install bcrypt
import bcrypt

api = Api(app)
class Mesa(Resource):
    def get(self,id):
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM t_mesa where mesa_id=%s",(id,))
        resultado = cur.fetchone()
        cur.close()
        return {
            'Mesa': resultado
        }
    def post(self):
        # un validador es algo que nos ahorra el trabajo de validar si la informacion es correcta
        parser = reqparse.RequestParser()
        # un parser es un filtro para validad la informacion
        parser.add_argument(
            'capacidad',
            type=int,
            required=True,
            help='Falta la capacidad')
        parser.add_argument(
            'estado',
            type=bool,
            required=True,
            help='Falta el estado'
        )
        data = parser.parse_args()
        return {
            data:data
        }


# class Mesas(Resource):