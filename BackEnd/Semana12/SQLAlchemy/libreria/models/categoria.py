from bd import bd
class CategoriaModel (bd.Model):
    # si no le cambio el nombre de la tabla, automaticamente pondra de nombre el nombre de la clase
    # https://docs.sqlalchemy.org/en/13/orm/tutorial.html
    __tablename__="t_categoria"
    # https://docs.sqlalchemy.org/en/13/core/type_basics.html#generic-types
    id = bd.Column("cat_id", bd.Integer, primary_key=True)
    nombre = bd.Column("cat_nom", bd.String(45))
    # RELACIONES
    productos = bd.relationship('ProductoModel', lazy='dynamic')

    def __init__(self, nombre):
        self.nombre = nombre