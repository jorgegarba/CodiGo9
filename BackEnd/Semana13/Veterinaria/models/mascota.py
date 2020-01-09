from bd import bd


class MascotaModel(bd.Model):
    __tablename__ = "t_mascota"
    mascota_id = bd.Column(bd.Integer, primary_key=True)
    # nullable indica si el campo puede admitir valores nulos
    mascota_nombre = bd.Column(bd.String(45), nullable=False)
    mascota_fechnac = bd.Column(bd.Date)
    mascota_tipo = bd.Column(bd.String(45))
    mascota_raza = bd.Column(bd.String(45))
    mascota_sexo = bd.Column(bd.String(45))
    mascota_obs = bd.Column(bd.Text)
    # RELACIONES
    usu_id = bd.Column(bd.Integer, bd.ForeignKey(
        't_usuario.usu_id'), nullable=False)
    atenciones = bd.relationship('AtencionModel', lazy=True)
    # valores que puede albergar el parametro lazy
    # 'select'/true => nos va a cargar toda la data del hijo
    # 'joined'/false => es muy parecido al select pero hace una sentencia de join inplicitamente para traer la data del hijo
    # 'subquery' => hace la sentencia similar al joined pero lo que en realidad usa es un select anidado (un select dentro de otro select)
    # 'dynamic' => retorna los objetos del join de la consulta

    def __init__(self, nombre, fecha_nacimiento, tipo, raza, sexo, id_usu, observaciones=None):
        self.mascota_nombre = nombre
        self.mascota_fechnac = fecha_nacimiento
        self.mascota_tipo = tipo
        self.mascota_raza = raza
        self.mascota_sexo = sexo
        self.usu_id = id_usu
        if observaciones:
            self.mascota_obs = observaciones

    def retornar_mascota(self):
        return {
            'nombre': self.mascota_nombre,
            'fecha de nacimiento': str(self.mascota_fechnac),
            'tipo': self.mascota_tipo,
            'raza': self.mascota_raza,
            'sexo': self.mascota_sexo,
            'observaciones': self.mascota_obs
        }

    def guardar_bd(self):
        bd.session.add(self)
        bd.session.commit()
    
    def actualizar_mascota(self, nombre=None, tipo=None, raza=None, sexo=None, observaciones=None):
        if nombre:
            self.mascota_nombre=nombre
        if tipo:
            self.mascota_tipo = tipo
        if raza:
            self.mascota_raza = raza
        if sexo:
            self.mascota_sexo = sexo
        if observaciones:
            self.mascota_obs = observaciones
        bd.session.commit()

