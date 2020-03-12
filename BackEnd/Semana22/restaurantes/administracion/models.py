from django.db import models
from django.contrib.auth.models import User

class Restaurante (models.Model):
    id = models.AutoField(primary_key=True, db_column="res_id")
    nombre=models.CharField(max_length=40, db_column = "res_nom", verbose_name="Razon Social")
    direccion=models.CharField(max_length=50, db_column="res_dir")
    def __str__(self):
        return self.nombre
    class Meta:
        db_table="t_restaurante"
        verbose_name_plural="Restaurantes"

class Sucursal(models.Model):
    id = models.AutoField(primary_key=True, db_column="suc_id")
    nombre = models.CharField(max_length=50, db_column ="suc_nom", verbose_name="Direccion")
    latitud = models.DecimalField(max_digits=10, decimal_places=8, db_column="suc_lat")
    longitud = models.DecimalField(max_digits=10, decimal_places=8, db_column="suc_long")
    telefono = models.CharField(max_length=10, db_column="suc_fono")
    

    restaurante = models.ForeignKey(Restaurante, on_delete=models.PROTECT, related_name="sucursales")
    def __str__(self):
        return '{} - {}'.format(self.restaurante, self.nombre)
        # return "{}, latitud:{}, longitud:{}".format(self.nombre, self.latitud, self.longitud)
    class Meta:
        db_table="t_sucursal"
        verbose_name_plural="Sucursales"

class Horario(models.Model):
    id= models.AutoField(primary_key=True, db_column="hor_id")
    apertura=models.TimeField(db_column="hor_ape")
    cierre=models.TimeField(db_column="hor_cie")
    # dia=models.DateField(db_column="hor_dia")
    dia = models.CharField(max_length=20,db_column="hor_dia", 
    # cuando nosotros le damos una lista de opciones que pueden guardar en la bd se tiene que estipular la llave y su valor y lo que se va a guardar en la bd va a ser su valor
    choices=[
        ('LUN','LUNES'),
        ('MAR','MARTES'),
        ('MIE','MIERCOLES'),
        ('JUE','JUEVES'),
        ('VIE','VIERNES'),
        ('SAB','SABADO'),
        ('DOM','DOMINGO'),
        ('ALL','TODXS')
    ], default='TODXS')
    aniversario= models.DateField(db_column="suc_aniv", default="2020-02-15")

    sucursal = models.ForeignKey(Sucursal, on_delete=models.PROTECT, related_name="horarios")
    def __str__(self):
        return "{} {} - {}".format(self.dia, self.apertura, self.cierre)
    class Meta:
        db_table="t_horario"
        verbose_name_plural="Horarios"

class Servicio(models.Model):
    id = models.AutoField(primary_key = True, db_column="serv_id")
    nombre = models.CharField(max_length=25, db_column="serv_nom")
    class Meta:
        db_table="t_servicio"
        verbose_name_plural="Servicios"

class SucursalServicio(models.Model):
    id = models.AutoField(primary_key=True, db_column="sucserv_id")
    servicio = models.ForeignKey(Servicio, on_delete=models.PROTECT, db_column="serv_id", related_name="servicios")
    sucursal = models.ForeignKey(Sucursal, on_delete=models.PROTECT, db_column="suc_id", related_name="sucursales")
    class Meta:
        db_table="t_suc_serv"
        verbose_name_plural="Sucursales Servicios"

class Producto(models.Model):
    id = models.AutoField(primary_key=True, db_column="prod_id")
    nombre = models.CharField(max_length=45, db_column="prod_nom")
    codigo = models.CharField(max_length=45, db_column="prod_cod")
    precio = models.DecimalField(max_digits=5, decimal_places=2, db_column="prod_prec")
    descripcion = models.TextField(db_column="prod_desc")
    imagen = models.TextField(db_column="prod_img")
    class Meta:
        db_table="t_producto"
        verbose_name_plural="Productos"

class ProductoSucursal(models.Model):
    id= models.AutoField(primary_key=True, db_column="prod_suc_id")
    estado= models.BooleanField(default=True, db_column="prod_suc_est")
    precio= models.DecimalField(max_digits=5, decimal_places=2, db_column="prod_suc_prec")
    sucursal= models.ForeignKey(Sucursal, on_delete=models.PROTECT, related_name="sucursales", db_column="suc_id")
    producto= models.ForeignKey(Producto, on_delete=models.PROTECT, related_name="productos", db_column="prod_id")
    class Meta:
        db_table="t_prod_suc"
        verbose_name_plural="Productos Sucursales"

class Calificacion(models.Model):
    id = models.AutoField(primary_key=True, db_column="cal_id")
    puntaje = models.IntegerField(db_column="cal_puntaje")
    comentario = models.CharField(max_length=45, db_column="cal_coment")
    sucursal = models.ForeignKey(Sucursal, on_delete=models.PROTECT, related_name="sucursales", db_column="suc_id")
    calificacion = models.ForeignKey('self', on_delete=models.PROTECT, related_name="calificaciones", db_column="cal_fk", null=True)
    usuario = models.ForeignKey(User,on_delete=models.PROTECT, related_name="usuarios", db_column="usu_id")
    class Meta:
        db_table="t_calificacion"
        verbose_name_plural="Calificaciones"