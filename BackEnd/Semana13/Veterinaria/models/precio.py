from bd import bd

class PrecioModel(bd.Model):
    __tablename__="t_precio"
    id = bd.Column("precio_id",bd.Integer, primary_key=True)
    descripcion = bd.Column("precio_desc", bd.String(45))
    precio = bd.Column("precio_precio", bd.DECIMAL(5,2))
    # RELACIONES
    atenciones = bd.relationship("AtencionModel")

    def __init__(self, descripcion, precio):
        self.descripcion = descripcion
        self.precio = precio

    def guardar_bd(self):
        bd.session.add(self)
        bd.session.commit()

    def retornar_precio(self):
        return {
            'descripcion':self.descripcion,
            'precio':self.precio
        }

    def actualizar_precio(self, descripcion, precio):
        self.descripcion= descripcion
        self.precio = precio
        bd.session.commit()
