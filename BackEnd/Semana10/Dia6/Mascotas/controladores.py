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

    def put(self,id):
        """Modificar una mascota"""
        data = request.get_json()
        cur = mysql.connection.cursor()
        cur.execute("UPDATE t_mascota SET mas_nombre =%s,mas_raza=%s,mas_tipo=%s,mas_fecnac=%s, mas_sexo=%s,prop_id=%s WHERE mas_id= %s",(data['nombre'],data['raza'],data['tipo'],data['fecha'],data['sexo'],data['id_prop'],id))
        mysql.connection.commit()
        cur.close()
        return {
            'message':'Ok',
            'content':'Se actualizo el registro de la mascota'
        },201

class Propietario(Resource):
    def get(self,dni):
        """Traer un usuario segun su dni"""
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM t_propietario WHERE prop_dni=%s",(dni,))
        resultado = cur.fetchone()
        if resultado:
            cur.close()
            return {
                'message':'Ok',
                'content':resultado
            },200
        return {
            'message':'error',
            'content':'No existe ese propietario'
        },400

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

    def put(self,dni):
        """Modificar un usuario"""
        data = request.get_json()
        cur = mysql.connection.cursor()
        cur.execute("UPDATE t_propietario SET prop_nombre=%s, prop_ape=%s, prop_dir=%s, prop_fono=%s, prop_dni=%s, prop_email=%s where prop_dni=%s",(data['nombre'],data['apellido'],data['direccion'],data['fono'],data['dni'],data['email'],dni))
        mysql.connection.commit()
        cur.close()
        return {
            'message' : 'Ok',
            'content' : 'Usuario actualizado con exito'
        },201

class Color(Resource):
    def post(self):
        """Crear un color """
        data = request.get_json()
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO t_color (col_nombre, col_hexadecil, col_rgb) VALUES (%s,%s,%s)",(data['nombre'],data['hexadecimal'],data['rgb']))
        mysql.connection.commit()
        cur.close()
        return {
            'message':'Ok',
            'content':'Color creado con exito'
        },201


class Colores(Resource):
    def get(self):
        """Traer todos los colores"""
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM t_color")
        data = cur.fetchall()
        cur.close()
        return {
            'message':'Ok',
            'content':data
        },200