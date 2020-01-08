from bd import bd

class AtencionModel(bd.Model):
    __tablename__="t_atencion"
    id = bd.Column("atencion_id", bd.Integer, primary_key=True)
    fecha = bd.Column("atencion_fech", bd.Date, nullable=False)
    motivo = bd.Column("atencion_motivo", bd.Text, nullable=False)
    diagnostico = bd.Column("atencion_diagnostico", bd.Text)
    medicacion = bd.Column("atencion_medicacion", bd.Text)
    siguiente_atencion = bd.Column("atencion_proxima_fecha", bd.Date)
    observaciones = bd.Column("atencion_obs",bd.Text)
    # RELACIONES
    id_mascota = bd.Column("mascota_id", bd.Integer, bd.ForeignKey("t_mascota.mascota_id"), nullable=False)
    id_precio = bd.Column("precio_id", bd.Integer, bd.ForeignKey("t_precio.precio_id"), nullable=False)
    detalles = bd.relationship("DetalleDocumentoModel")

    def __init__(self, fecha, motivo, diagnostico, medicacion, proxima_atencion, observaciones, mascota, precio):
        self.fecha = fecha
        self.motivo = motivo
        self.diagnostico = diagnostico
        self.medicacion = medicacion
        self.siguiente_atencion = proxima_atencion
        self.observaciones = observaciones
        self.id_mascota = mascota
        self.id_precio = precio

    def traer_atencion(self):
        return {
            'fecha': self.fecha,
            'motivo': self.motivo,
            'diagnostico': self.diagnostico,
            'medicacion': self.medicacion,
            'proxima atencion':self.siguiente_atencion,
            'observaciones': self.observaciones
        }

    def guardar_bd(self):
        bd.session.add(self)
        bd.session.commit()
