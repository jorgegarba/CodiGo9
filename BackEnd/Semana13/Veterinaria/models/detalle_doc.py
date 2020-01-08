from bd import bd

class DetalleDocumentoModel(bd.Model):
    __tablename__="t_detalle_doc"
    id = bd.Column("dd_id",bd.Integer, primary_key = True)
    precio = bd.Column("dd_precio", bd.DECIMAL(5,2))
    descuento = bd.Column("db_dscto", bd.DECIMAL(5,2))
    # RELACION
    cd_id = bd.Column(bd.Integer, bd.ForeignKey("t_cabecera_doc.cd_id"), nullable=False)
    atencion_id = bd.Column(bd.Integer, bd.ForeignKey("t_atencion.atencion_id"), nullable=False)

    def __init__(self, precio, descuento, cabecera, atencion):
        self.precio = precio
        self.descuento = descuento
        self.cd_id = cabecera
        self.atencion_id = atencion

    def guardar_bd(self):
        bd.session.add(self)
        bd.session.commit()

    def traer_detalle(self):
        return {
            'precio': self.precio,
            'cabecera': self.cd_id
        }