from bd import bd

class RegistroModel(bd.Model):
    # si no definimos el __tablename__, el nombre será el nombre de la clase
    __tablename__="t_registro"
    id = bd.Column("registro_id",bd.Integer, primary_key=True)
    registro_ingreso = bd.Column("registro_ingreso",bd.DateTime)
    registro_salida = bd.Column("registro_salida", bd.DateTime)
    # RELACIONES
    usu_id = bd.Column(bd.Integer, bd.ForeignKey('t_usuario.usu_id'), nullable=False)

    def __init__(self,registro_de_ingreso,registro_de_salida,id_usuario):
        self.registro_ingreso=registro_de_ingreso
        self.registro_salida=registro_de_salida
        self.usu_id = id_usuario

    def guardar_bd(self):
        bd.session.add(self)
        bd.session.commit()

    def horario_marcado(self):
        return {
            'entrada': format(self.registro_ingreso),
            'salida': format(self.registro_salida)
        }