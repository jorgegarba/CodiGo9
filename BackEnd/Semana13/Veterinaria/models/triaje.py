from bd import bd

class TriajeModel(bd.Model):
    __tablename__="t_triaje"
    id = bd.Column("triaje_id",bd.Integer, primary_key = True)
    peso = bd.Column("triaje_peso",bd.DECIMAL(5,2))
    temperatura = bd.Column("triaje_temp",bd.DECIMAL(5,2))
    # RELACIONES
    atencion_id = bd.Column(bd.Integer, bd.ForeignKey("t_atencion.atencion_id"))
    # esto sirve para crear nuestra relacion de uno a uno
    atencion = bd.relationship("AtencionModel", uselist=False)

    def __init__(self, peso, temperatura, atencion):
        self.peso = peso
        self.temperatura = temperatura
        self.atencion_id = atencion

    def guardar_bd(self):
        bd.session.add(self)
        bd.session.commit()

    def devolver_triaje(self):
        return {
            'peso':self.peso,
            'temperatura':self.temperatura,
            'atencion':self.atencion_id
        }
