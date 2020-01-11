from models.usuario import UsuarioModel
import bcrypt

class Usuario(object):
    def __init__(self, id, username):
        self.id = id
        self.username=username
    def __str__(self):
        return "Usuario(id='%s')" % self.id
        # return "Usuario(id='{}')".format(self.id)

def autenticacion(username, password):
    if username and password:
        resultado = UsuarioModel.query.filter_by(correo=username).first()
        if resultado:
            # comprobacion de contraseñas
            pass_convertida = bytes(password,'utf-8')
            salt = bytes(resultado.salt,'utf-8')
            hashed = bcrypt.hashpw(pass_convertida,salt).decode('utf-8')
            if hashed == resultado.hashe:
                return Usuario(resultado.id, resultado.correo)
            else:
                print('Contraseña incorrecta')
                return None
        else:
            print('Usuario no encontrado')
            return None
    else:
        print('Falta el username o la password')
        return None

def identificacion(payload):
    """El payload es la parte donde esta la fecha de duracion de la token, los campos extras que puedo almacenar en la token, y la fecha de creacion de la token"""
    if (payload['identity']):
        # el identity me devuelve el id del usuario que se ha logeado entonces gracias a ello yo puedo almacenar otros campos
        resultado = UsuarioModel.query.filter_by(id=payload['identity']).first()
        if resultado:
            return (resultado.id, resultado.correo)
        else:
            return None
    else:
        return None
