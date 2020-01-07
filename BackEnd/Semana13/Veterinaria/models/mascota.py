from bd import bd

class MascotaModel(bd.Model):
    __tablename__ ="t_mascota"
    mascota_id = bd.Column(bd.Integer, primary_key=True)
    # nullable indica si el campo puede admitir valores nulos
    mascota_nombre = bd.Column(bd.String(45), nullable=False)
    mascota_fechnac = bd.Column(bd.Date)
    mascota_tipo = bd.Column(bd.String(45))
    mascota_raza = bd.Column(bd.String(45))
    mascota_sexo = bd.Column(bd.String(45))
    mascota_obs = bd.Column(bd.Text, default="No tiene.")
    # RELACIONES
    usu_id = bd.Column(bd.Integer, bd.ForeignKey('t_usuario.usu_id'), nullable=False)
    atenciones = bd.relationship('RelacionModel', lazy=True)
    # valores que puede albergar el parametro lazy
    # 'select'/true => nos va a cargar toda la data del hijo
    # 'joined'/false => es muy parecido al select pero hace una sentencia de join inplicitamente para traer la data del hijo
    # 'subquery' => hace la sentencia similar al joined pero lo que en realidad usa es un select anidado (un select dentro de otro select)
    # 'dynamic' => retorna los objetos del join de la consulta
    