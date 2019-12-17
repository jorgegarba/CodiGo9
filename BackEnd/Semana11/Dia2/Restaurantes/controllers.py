from flask_restful import Resource, Api, reqparse
# reqparse => nos va a validar que nuestra informacion solicitada cumpla con los requerimientos
from bd import mysql, app
# pip install bcrypt
import bcrypt

api = Api(app)


class Mesa(Resource):
    def get(self, id):
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM t_mesa where mesa_id=%s", (id,))
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
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO t_mesa (mesa_capacidad, mesa_estado) VALUES (%s,%s)",
                    (data['capacidad'], data['estado']))
        mysql.connection.commit()
        cur.close()
        return {
            'message': 'Mesa ingresada exitosamente'
        }, 201


class Usuario(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument(
            'nombre',
            type=str,
            required=True,
            help='Falta el nombre'
        )
        parser.add_argument(
            'apellido',
            type=str,
            required=True,
            help='Falta el apellido'
        )
        parser.add_argument(
            'tipo',
            type=str,
            required=True,
            help='Falta el tipo'
        )
        parser.add_argument(
            'fecha',
            type=str,
            required=True,
            help='Falta la fecha (YYYY-MM-DD)'
        )
        parser.add_argument(
            'password',
            type=str,
            required=True,
            help='Falta el password'
        )
        parser.add_argument(
            'correo',
            type=str,
            required=True,
            help='Falta el correo'
        )
        data = parser.parse_args()
        # VALIDAR QUE NO EXISTA UN USUARIO CON ESE CORREO
        validacion = mysql.connection.cursor()
        validacion.execute("SELECT * FROM T_USUARIO WHERE USU_EMAIL = %s",(data['correo'],))
        resultadosValidacion = validacion.fetchone()
        if resultadosValidacion:
            return {
                'message':'Correo ya registrado'
            },500


        # ENCRIPTACION DE CONTRASEÑAS
        password = bytes(data['password'], 'utf-8')
        salt = bcrypt.gensalt(rounds=10)
        hashed = bcrypt.hashpw(password, salt)
        # convertimos nuestras variables que inicialmente estan en bytes a string para poder almacenarlas en nuestra base de datos
        saltstr = salt.decode('utf-8')
        hashedstr = hashed.decode('utf-8')
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO T_USUARIO (USU_NOM, USU_APE, USU_TIPO, USU_FECHA, USU_SALT, USU_HASH, USU_EMAIL) VALUES(%s,%s,%s,%s,%s,%s,%s)",
                    (data['nombre'], data['apellido'], data['tipo'], data['fecha'], saltstr, hashedstr, data['correo']))
        cur.connection.commit()
        cur.close()
        print(password, salt, hashed)
        return {
            'message': 'Usuario creado exitosamente'
        }, 201

class Login(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument(
            'correo',
            type=str,
            required=True,
            help='Falta el correo'
        )
        parser.add_argument(
            'password',
            type=str,
            required=True,
            help='Falta la password'
        )
        data = parser.parse_args()
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM t_usuario where usu_email=%s",(data['correo'],))
        respuesta = cur.fetchone()
        if (respuesta):
            # VALIDAR CONTRASEÑA
            # https://es.wikipedia.org/wiki/Sal_(criptograf%C3%ADa)
            password = bytes(data['password'],'utf-8')
            salt = bytes(respuesta[5],'utf-8')
            hashed = bcrypt.hashpw(password,salt)
            hashedstr = hashed.decode('utf-8')
            if hashedstr == respuesta[4]:
                return {
                    'message': ('Bienvenido Mister %s %s' % (respuesta[1],respuesta[2]))
                }
            else:
                return {
                    'message': 'Usuario o contraseña incorrectos'
                },403
        else:
            return {
                'message': 'Usuario o contraseña no validos'
            },403

class Asignacion (Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument(
            'id_usuario',
            type=int,
            required=True,
            help='Falta el id_usuario'
        )
        parser.add_argument(
            'id_asignar',
            type=int,
            required=True,
            help='Falta el id_asignar'
        )
        parser.add_argument(
            'mesa_id',
            type=int,
            required=True,
            help='Falta el mesa_id'
        )
        parser.add_argument(
            'fecha',
            type=str,
            required=True,
            help='Falta la fecha'
        )
        data = parser.parse_args()
        cur = mysql.connection.cursor()
        cur.execute("SELECT usu_tipo from t_usuario WHERE usu_id=%s",(data['id_usuario'],))
        usu_tipo = cur.fetchone()
        if usu_tipo[0] == 1:
            return 'Es admin'
        return 'Es mesero'