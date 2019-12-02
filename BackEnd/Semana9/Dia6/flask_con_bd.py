from flask import Flask, jsonify, request
# jsonify => para convertir nuestro diccionario en un json
# request => para extraer todo lo enviado por el body
# JavaScript Object Notation => es el objeto por el cual se manejan datos hacia javascript
from flask_mysqldb import MySQL
# tienes que tener instalado => pip install flask-mysqldb, pero antes tienes que haber instalado el wheel no oficial de: https://www.lfd.uci.edu/~gohlke/pythonlibs/#mysqlclient

app = Flask(__name__)
# CONFIGURACION PARA LAS CREDENCIALES DE CONEXION A NUESTRA BD
app.config['MYSQL_HOST']='localhost'
app.config['MYSQL_USER']='root'
app.config['MYSQL_PASSWORD']='root'
app.config['MYSQL_DB']='flaskCodigo9'

# CREAR VINCULO CON LA BASE DE DATOS
mysql = MySQL(app)
# ALTER USER 'user'@'url' IDENTIFIED WITH mysql_native_password by 'password';

# TRAER TODOS LOS SUPERMERCADOS
# http://127.0.0.1:port
@app.route('/supermercados/traer')
def traer_supermercados():
    # ABRIMOS UNA CONEXION CON NUESTRA BASE DE DATOS
    conexion = mysql.connection.cursor()
    # HACEMOS LA SENTENCIA EN NUESTRA BASE DE DATOS
    conexion.execute('select * FROM SUPERMERCADOS')
    # CAPTURAR LA DATA O INFORMACION QUE NOS LLEGA DE LA QUERY
    informacion = conexion.fetchall()
    diccionario  = []
    for supermercado in informacion:
        supermercadodic ={
            'id':supermercado[0],
            'nombre':supermercado[1],
            'direccion':supermercado[2]
        }
        diccionario.append(supermercadodic)
    conexion.close()
    return jsonify(diccionario)

@app.route('/supermercados/agregar',methods=['POST'])
def agregar_super():
    info = request.get_json()
    if(info['nombre'] and info['direccion']):
        conexion = mysql.connection.cursor()
        conexion.execute('INSERT INTO SUPERMERCADOS (NOM_SUPER, DIR_SUPER) VALUES (%s,%s)',(info['nombre'],info['direccion']))
        mysql.connection.commit()
        conexion.close()
        return jsonify({
            'message':'Supermercado agregado con exito',
            'content': info
        }),201
    else:
        return jsonify(
            {
                'message':'Faltan valores'
            }
        ),400

@app.route('/cliente/agregar', methods=['POST'])
def agregar_cliente():
    info = request.get_json()
    if(info.__contains__('nombre') and info.__contains__('apellido') and info.__contains__('categoria')):
        conexion = mysql.connection.cursor()
        conexion.execute('INSERT INTO CLIENTE (NOM_CLI, ape_cli, cat_cli) VALUES (%s,%s,%s)',(info['nombre'],info['apellido'],info['categoria']))
        mysql.connection.commit()
        conexion.close()
        return jsonify({
            'message':'Cliente registrado con exito',
            'content': info
        }),201
    else:
        return jsonify(
            {
                'message':'Faltan valores'
            }
        ),400

if __name__ == '__main__':
    app.run(debug=True, port=5000)