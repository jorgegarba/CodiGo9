from base_de_datos import mysql
from flask_restful import Resource
from flask import request

class Mascota(Resource):
    def post(self):
        mascota = request.get_json()
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO t_mascota(mas_nombre,mas_raza,mas_tipo,mas_fecnac, mas_sexo,prop_id) values (%s,%s,%s,%s,%s,%s)",(mascota['nombre'],mascota['raza'],mascota['tipo'],mascota['fecha'],mascota['sexo'],mascota['propietario'],))
        mysql.connection.commit()
        cur.close()
        return {
            'message':'Se registro correctamente la mascota',
            'content':mascota
        },201

    def get(self,id):
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM t_mascota where mas_id=%s",(id,))
        resultado = cur.fetchone()
        cur.close()
        if resultado:
            return {
                'message':'Ok',
                'content':resultado
            }
        return {
            'message':'Ok',
            'content':f'No hay la mascota con el id {id}'
        },400

    def put(self):
        """Modificar una mascota"""
        pass

class Propietario(Resource):
    def get(self,dni):
        """Traer un usuario segun su dni"""
        pass
    def post(self):
        propietario = request.get_json()
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO t_propietario (prop_nombre, prop_ape, prop_dir, prop_fono, prop_dni, prop_email) values (%s,%s,%s,%s,%s,%s)",(propietario['nombre'],propietario['apellido'],propietario['direccion'],propietario['fono'],propietario['dni'],propietario['email'],))
        mysql.connection.commit()
        cur.close()
        return {
            'message':'Ok',
            'content': 'Propietario creado con exito'
        },201
    def put(self,id):
        """Modificar un usuario"""
        pass

class Color(Resource):
    def post(self):
        """Crear un color """
        pass


class Colores(Resource):
    def get(self):
        """Traer todos los colores"""
        pass