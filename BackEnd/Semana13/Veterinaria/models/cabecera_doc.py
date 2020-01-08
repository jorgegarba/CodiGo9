from bd import bd

class CabeceraDocumento(bd.Model):
    __tablename__="t_cabecera_doc"
    id = bd.Column("cd_id", bd.Integer, primary_key=True)
    fecha = bd.Column("cd_fech", bd.Date)
    numeracion = bd.Column("cd_numeracion", bd.String(25))
    total = bd.Column("cd_total", bd.Float())
    # RELACION
    usu_id = bd.Column(bd.Integer, bd.ForeignKey("t_usuario.usu_id"), nullable=False)
    detalles = bd.relationship("DetalleDocumentoModel")

    def __init__(self, fecha, numeracion, total, id_usu):
        self.fecha = fecha
        self.numeracion = numeracion
        self.total = total
        self.usu_id = id_usu

    def retornar_cabecera(self):
        return {
            'nro': self.numeracion,
            'fecha': self.fecha,
            'total' : self.total
        }
    
    def guardar_bd(self):
        bd.session.add(self)
        bd.session.commit()