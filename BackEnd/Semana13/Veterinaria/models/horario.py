from bd import bd

class HorarioModel(bd.Model):
    # si no definimos el __tablename__, el nombre será el nombre de la clase
    __tablename__="t_horario"
    id = bd.Column("horario_id",bd.Integer, primary_key=True)
    fecha_inicio = bd.Column("horario_fechin", bd.DateTime)
    fecha_fin = bd.Column("horario_fechfin",bd.DateTime)
    fecha_ingreso = bd.Column("horario_ingreso",bd.DateTime)
    fecha_salida = bd.Column("horario_salida", bd.DateTime)
    # RELACIONES
    usu_id = bd.Column(bd.Integer, bd.ForeignKey('t_usuario.usu_id'), nullable=False)

    def __init__(self,fecha_inicial,fecha_final,fecha_de_ingreso,fecha_de_salida,id_usuario):
        self.fecha_inicio=fecha_inicial
        self.fecha_fin=fecha_final
        self.fecha_ingreso=fecha_de_ingreso
        self.fecha_salida=fecha_de_salida
        self.usu_id = id_usuario

    def guardar_bd(self):
        bd.session.add(self)
        bd.session.commit()

    def horario_de_trabajo(self):
        return {
            'fecha de ingreso': self.fecha_inicio,
            'fecha de salida': self.fecha_salida
        }

    def horario_marcado(self):
        return {
            'entrada': self.fecha_ingreso,
            'salida': self.fecha_fin
        }