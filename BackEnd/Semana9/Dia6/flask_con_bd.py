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
# PARA MODIFICAR LA CONTRASEÑA DEL USUARIO PARA QUE SEA VISTA DESDE AFUERA DEL SERVIDOR, TENEMOS QUE CORRER EL SIGUIENTE COMANDO
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

@app.route('/clientes/traer/<int:id>', methods=['GET'])
def traercliente(id):
    conexion = mysql.connection.cursor()
    conexion.execute(f"SELECT * FROM CLIENTE WHERE ID_CLI = {id}")
    data = conexion.fetchone()
    # fetchone() => trae la primera coincidencia
    # fetchall() => trae todas las coincidencias
    conexion.close()
    if data:
        return jsonify({
            'id':data[0],
            'nombre':data[1],
            'apellido':data[2],
            'categoria':data[3]
        })
    return jsonify({
        'message':'Siga intentando caballero/a'
    }),404

# http://127.0.0.1:500/clientesuper/agregar
@app.route('/clientesuper/agregar',methods=['POST'])
def agregar_cliente_supermercado():
    data = request.get_json()
    # INGRESAR UN CLIENTE CON SUPERMERCADO PERO QUE PRIMERO VALIDE SI EXISTE EL CLIENTE Y SI EXISTE EL SUPERMECADO, CASO CONTRARIO INDIQUE QUE NO SE PUEDE PORQUE ALGUNO DE LOS DOS NO EXISTE (404) Y QUE EN LA DATA TENGAMOS EL ID_CLIENTE Y EL ID_SUPER Y SI TODO ESTA CONFORME QUE RETORNE UN MENSAJE DE SATISFACCION CON CODIGO 201
    if(data.__contains__('id_cliente') and data.__contains__('id_super')):
        conexion = mysql.connection.cursor()
        conexion.execute(f"SELECT * FROM CLIENTE WHERE ID_CLI = {data['id_cliente']}")
        cliente = conexion.fetchone()
        conexion.execute(f"SELECT * FROM SUPERMERCADOS WHERE ID_SUPER = {data['id_super']}")
        supermercado = conexion.fetchone()
        conexion.close()
        if supermercado and cliente:
            conexioninsert = mysql.connection.cursor()
            conexioninsert.execute("INSERT INTO SUPER_CLI (ID_CLI,ID_SUPER) VALUES (%s,%s)",(data['id_cliente'],data['id_super']))
            mysql.connection.commit()
            conexioninsert.close()
            return jsonify({
                'message':'El cliente fue vinculado con el supermercado con exito'
            }),201
        else:
            return jsonify({
                'message': 'No existe el cliente o el supermercado, compruebe y vuelva a intentalo'
            }),400
    return jsonify({
        'message':'Faltan datos en el body'
    }),400

if __name__ == '__main__':
    app.run(debug=True, port=5000)