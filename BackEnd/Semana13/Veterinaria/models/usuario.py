from bd import bd
import bcrypt

class UsuarioModel(bd.Model):
    __tablename__="t_usuario"
    # https://docs.sqlalchemy.org/en/13/core/metadata.html#sqlalchemy.schema.Column
    # https://flask-sqlalchemy.palletsprojects.com/en/2.x/models/
    # https://docs.sqlalchemy.org/en/13/core/type_basics.html
    id = bd.Column("usu_id",bd.Integer, primary_key=True)
    nombre = bd.Column("usu_nom", bd.String(45))
    apellido = bd.Column("usu_ape", bd.String(45))
    tipo = bd.Column("usu_tipo", bd.Integer)
    hashe =bd.Column("usu_hash", bd.Text,nullable=True)
    salt = bd.Column("usu_salt",bd.Text,nullable=True)
    direccion = bd.Column("usu_dir",bd.Text)
    correo = bd.Column("usu_email", bd.String(45))
    telefono = bd.Column ("usu_fono", bd.String(25))
    # RELACIONES
    horario = bd.Relationship('HorarioModel', lazy="dynamic")
    # usuario.horario
    # select * from usuario inner join horario on usuario.usu_id=horario.usu_id
    def __init__(self,nombre,apellido,tipo,direccion,correo,telefono,password=None):
        self.nombre=nombre
        self.apellido=apellido
        self.tipo = tipo
        self.direccion= direccion
        self.correo = correo
        self.telefono = telefono
        if password:
            # encriptacion de mi contraseña
            password_convertida = bytes(password,'utf-8')
            salt = bcrypt.gensalt()
            hashed = bcrypt.hashpw(password_convertida,salt)
            salt = salt.decode('utf-8')
            hashed = hashed.decode('utf-8')
            self.hashe = hashed
            self.salt = salt

    def retornar_usuario(self):
        return {
            'nombre_completo':self.nombre+' '+self.apellido,
            'correo':self.correo,
            'telefono':self.telefono
        }
    
    def guarda_en_la_bd(self):
        # cada vez que nosotros creamos una instancia para crear un nuevo usuario, lo mejor es mandar toda la instacion a almacenar a la base de datos para no tener problemas con referencias a ese objeto
        # cuando creo mi sesion estoy insertando mi nuevo usuario, pero no lo estoy guardando, si hay algo mal o algo incorrecto, no lo guardara en la base de datos hasta hacer commit, caso contrario si no hay error pero no lo queremos guardar en la bd podemos hacer un rollback para 'retroceder en el tiempo' y asi no guardar ese registro, a esto se le llama TRANSACTION o TRANSACT-SQL
        bd.session.add(self)
        bd.session.commit()
        # BEGIN TRANSACTION;
        # DELETE FROM USUARIO;
        # ROLLBACK TRANSACTION;
        # COMMIT TRANSACTION; <- ya va a guardar permanentemente los cambios en la bd

