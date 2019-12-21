from bd import bd
class ProductoModel(bd.Model):
    __tablename__ = "t_producto"
    id = bd.Column("prod_id", bd.Integer, primary_key=True)
    nombre = bd.Column("prod_nom", bd.String(45))
    precio = bd.Column("prod_precio", bd.Float(precision=2))
    # RELACIONES
    # nullable es para estipular si puede aceptar valores nulos o no, por default viene con el valor de True
    cat_id = bd.Column(bd.Integer, bd.ForeignKey(
        't_categoria.cat_id'), nullable=False)
    # https://flask-sqlalchemy.palletsprojects.com/en/2.x/models/#one-to-many-relationships
    categoria = bd.relationship('CategoriaModel')

    def __init__(self, nombre, precio, id_cat):
        self.nombre = nombre
        self.precio = precio
        self.cat_id = id_cat
