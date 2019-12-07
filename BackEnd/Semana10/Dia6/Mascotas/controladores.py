from base_de_datos import mysql
from flask_restful import Resource
from flask import request

class Mascota(Resource):
    def get(self,id):
        cur = mysql.connection.cursor()
        cur.execute("")