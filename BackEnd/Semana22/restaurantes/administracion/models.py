from django.db import models

# Create your models here.

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