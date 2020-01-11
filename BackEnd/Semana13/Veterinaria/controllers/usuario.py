from flask_restful import Resource, reqparse
from models.usuario import UsuarioModel
import bcrypt
from flask_jwt import jwt_required

class UsuarioController(Resource):
    def post (self):
        parser = reqparse.RequestParser()
        parser.add_argument(
            "nombre",
            type=str,
            required=True,
            help="Se requiere el nombre"
        )
        parser.add_argument(
            "apellido",
            type=str,
            required=True,
            help="Se requiere el apellido"
        )
        parser.add_argument(
            "tipo",
            type=int,
            required=True,
            help="Se requiere el tipo"
        )
        parser.add_argument(
            "password",
            type=str,
            required=False
        )
        parser.add_argument(
            "direccion",
            type=str,
            required=True,
            help="Se requiere una direccion"
        )
        parser.add_argument(
            "correo",
            type=str,
            required=True,
            help="Se requiere el correo"
        )
        parser.add_argument(
            "telefono",
            type=str,
            required=True,
            help="Se requiere el telefono"
        )
        data = parser.parse_args()
        # cuando queremos filtrar, tenemos que comprar basandonos en el campo del modelo, no del nombre del atributo de la tabla
        consultar_usuario = UsuarioModel.query.filter_by(correo=data['correo']).first()
        # first => devuelve un objeto
        # all => devuelve una lista de objetos
        if not consultar_usuario:
            try:
                UsuarioModel(data['nombre'],data['apellido'],data['tipo'],data['direccion'],data['correo'],data['telefono'],data['password']).guardar_bd()
            except:
                return{
                    'message':'Hubo un error al guardar el usuario, compruebe los campos'
                },500 # INTERNAL SERVER ERRROR
            return {
                'message':'Usuario Creado exitosamente'
            }, 201 # CREATED
        return {
            'message':'Ya hay un usuario con ese correo, no se pudo agregar'
        }, 400 # BAD REQUEST

    @jwt_required()
    def get(self, nombre):
        # USAR EL LIKE
        # SELECT * FROM T_USUARIO WHERE USU_NOM LIKE '%'+NOMBRE+'%'
        # UsuarioModel.query.filter_by(nombre="eduard").filter_by(apellido="rodirguez")
        # UsuarioModel.query.filter(nombre="eduardo",apellido="rodriguez")
        resultado = UsuarioModel.query.filter(UsuarioModel.nombre.like('%'+nombre+'%')).all()
        if resultado:
            resultadoFinal = []
            for usuario in resultado:
                resultadoFinal.append(usuario.retornar_usuario())
            return resultadoFinal
        else:
            return {
                'message':'No hay un usuario con ese nombre '+nombre
            },404 # NOT FOUND

class Login(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument(
            "correo",
            type=str,
            required=True,
            help="Falta el correo"
        )
        parser.add_argument(
            "password",
            type=str,
            required=True,
            help="Falta el password"
        )
        data = parser.parse_args()
        consulta = UsuarioModel.query.filter_by(correo= data['correo']).first()
        print(consulta)
        # ver si tiene password que haga la validacion y sino que indique que no tiene permisos de login
        print(consulta.nombre)
        #consulta => es un objecto de la clase UsuarioModel => nombre, apellido, correo, hash, salt, tipo
        if consulta:
            if consulta.hashe:
                # VERIFICAR EL MATCH CON LA CONTRASEÑA
                # bcrypt
                pass_convertida = bytes(data['password'],'utf-8')
                salt = bytes(consulta.salt,'utf-8')
                hashed = bcrypt.hashpw(pass_convertida,salt)
                hashed = hashed.decode('utf-8')
                if hashed==consulta.hashe:
                    return {
                        'message': 'Usuario logeado correctamente'
                    },200
                else:
                    return{
                        'message':'Usuario o contraseña incorrectos'
                    },400
            else:
                # No tiene permisos de login
                return {
                    'message':'Usuario o contraseña incorrectos'
                }, 400
        else:
            return {
                'message': 'Usuario o contraseña incorrectos'
            }, 400
