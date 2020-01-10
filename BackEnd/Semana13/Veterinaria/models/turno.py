from bd import bd

class TurnoModel(bd.Model):
    __tablename__="t_turno"
    turno_id = bd.Column(bd.Integer, primary_key=True)
    turno_hora_ingreso = bd.Column(bd.DateTime())
    turno_hora_salida = bd.Column(bd.DateTime())
    # RELACIONES
    usu_id = bd.Column(bd.Integer, bd.ForeignKey('t_usuario.usu_id'), nullable=False)
    # formas de acceder a mi tabla padre sin la necesidad de llamarla, ESTO NO CREA LA RELACION
    usuario = bd.relationship('UsuarioModel')
    def __init__(self, hora_ingreso, hora_salida, id_usuario):
        self.turno_hora_ingreso = hora_ingreso
        self.turno_hora_salida = hora_salida
        self.usu_id = id_usuario

