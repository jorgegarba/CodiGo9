from flask import Flask, request
from flask_restful import Api, Resource
from flask_mysqldb import MySQL

# creamos una instancia de nuestra clase Flask
app = Flask(__name__)
# creamos una instancia de la clase Api
api = Api(app)
# CONEXION A NUESTRA BASE DE DATOS
app.config['MYSQL_HOST']='localhost'
app.config['MYSQL_USER']='root'
app.config['MYSQL_PASSWORD']='root'
app.config['MYSQL_DB']='codigo9flaskrestful'
mysql = MySQL(app)
@app.before_first_request
def creacionbd():
    cur = mysql.connection.cursor()
    cur.execute("""CREATE TABLE IF NOT EXISTS PRODUCTO(
        prod_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        prod_desc VARCHAR(50),
        prod_precio DOUBLE(5,2),
        prod_disponible boolean
    );
    CREATE TABLE IF NOT EXISTS ALMACEN (
        alma_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        alma_desc VARCHAR(50)
    );
    CREATE TABLE IF NOT EXISTS ALMAPROD(
        almaprod_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        prod_id int,
        alma_id int,
        cant int,
        FOREIGN KEY (prod_id) REFERENCES PRODUCTO(prod_id),
        FOREIGN KEY (alma_id) REFERENCES ALMACEN(alma_id)
    )""")
    cur.close()

class Producto(Resource):
    def get(self):
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM PRODUCTO")
        data = cur.fetchall()
        cur.close()
        return {
            'message':'Ok',
            'content': data
        }

    def post(self):
        data = request.get_json()
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO PRODUCTO (PROD_DESC, PROD_PRECIO, PROD_DISPONIBLE) VALUES (%s,%s,%s)",(data['nombre'],data['precio'],data['disponible']))
        mysql.connection.commit()
        cur.close()
        return {
            'message':'Producto agregado con exito',
            'producto':data
        },201

    def put(self,id_producto):
        data = request.get_json()
        cur = mysql.connection.cursor()
        cur.execute("UPDATE PRODUCTO SET PROD_DESC=%s, PROD_PRECIO=%s, PROD_DISPONIBLE=%s WHERE PROD_ID=%s",(data['nombre'],data['precio'],data['disponible'],id_producto))
        mysql.connection.commit()
        cur.close()
        return {
            'message':'Producto actualizado con exito',
            'producto': data
        }

    def delete(self,id_producto):
        cur = mysql.connection.cursor()
        # si solo tienes un unico parametro en tu sentencia sql ponle la comita, sino, es opcional, esto sirve para definir que lo que le estamos mandando es una tupla
        cur.execute("DELETE FROM PRODUCTO WHERE PROD_ID=%s",(id_producto,))
        mysql.connection.commit()
        return {
            'message': 'Producto eliminado con exito'
        },200

api.add_resource(Producto,'/producto','/producto/<int:id_producto>')
if __name__=='__main__':
    app.run(debug=True)