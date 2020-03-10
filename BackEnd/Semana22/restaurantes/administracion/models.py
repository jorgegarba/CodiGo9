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
        return "{}, latitud:{}, longitud:{}".format(self.nombre, self.latitud, self.longitud)
    class Meta:
        db_table="t_sucursal"
        verbose_name_plural="Sucursales"