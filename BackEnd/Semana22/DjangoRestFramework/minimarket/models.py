from django.db import models

# Create your models here.


class Grupo(models.Model):
    grup_id = models.AutoField(
        primary_key=True, help_text="Id de la categoria")
    grup_nom = models.CharField(
        max_length=45, help_text="Descripcion de la categoria", unique=True)

    def __str__(self):
        return '{}'.format(self.grup_nom)

    class Meta:
        db_table = "t_grupo"
        verbose_name_plural = "Grupos"


class UnidadMedida(models.Model):
    um_id = models.AutoField(
        primary_key=True, help_text="Id de la unidad de medida")
    um_desc = models.CharField(
        max_length=45, help_text="Descripcion de la unidad de medida", unique=True)

    class Meta:
        db_table = "t_um"
        verbose_name_plural = "Unidad de Medidas"


class Producto(models.Model):
    prod_id = models.AutoField(primary_key=True, help_text="Id del producto")
    prod_nom = models.CharField(max_length=45, help_text="Nombre del producto")
    prod_prec = models.DecimalField(
        max_digits=5, decimal_places=2, help_text="Precio del producto")
    # tproductos_col
    # FOREIGN KEYS
    # on_delete => es la propiedad que define como se va a comportar las relaciones de herencia al momento de eliminar la primary key
    # CASCADE => es el mas comun, si se elimina la pk automaticamente se eliminan todas sus relaciones
    # PROTECT => prohibe eliminar la pk porque tiene relaciones existentes, en ese caso lo que se recomienda hacer es primero eliminar la relaciones y luego eliminar la pk
    # SET_NULL => cuando se elimina la pk el campo de la pk queda con el valor de NULL
    # DO_NOTHING => esta es la peor de todas porque crea problema en su integridad de datos al hacer que si tu eliminas una pk no hace nada y aun en el campo de la fk mantiene su valor eliminado
    producto_padre = models.ForeignKey(Producto, on_delete=models.CASCADE)
    um_id = models.ForeignKey(UnidadMedida, on_delete=models.CASCADE)
    grup_id = models.ForeignKey(Grupo, on_delete=models.CASCADE)

    def __str__(self):
        return "{} {}".format(self.prod_nom, self.um_id.um_desc)

    class Meta:
        db_table = "t_producto"
        verbose_name_plural = "Productos"


class Precio(models.Model):
    precio_id = models.AutoField(primary_key=True, help_text="Id del precio")
    precio_promo = models.DecimalField(
        max_digits=5, decimal_places=2, help_text="Precio promocion")
    precio_fechin = models.DateField()
    precio_fechfin = models.DateField()
    precio_est = models.BooleanField(
        default=False, help_text="Estado del precio en oferta")
    precio_fijo = models.DecimalField(
        max_digits=5, decimal_places=2, help_text="Precio fijo")
    prod_id = models.ForeignKey(Producto, on_delete=models.CASCADE)
    class Meta:
        db_table = "t_precio"
        verbose_name_plural = "Precios"

class Proveedor(models.Model):
    prov_id = models.AutoField(primary_key=True, help_text="Id del proveedor")
    prov_raz_soc = models.CharField(max_length=45, help_text="Razon social del proveedor")
    prov_doc = models.CharField(max_length=20, help_text="Documento del proveedor")
    prov_fono = models.CharField(max_length=40, help_text="Telefono del proveedor")
    prov_correo = models.CharField(max_length=40, help_text="Correo del proveedor")
    class Meta:
        db_table="t_proveedor"
        verbose_name_plural="Proveedores"

class Lote(models.Model):
    lote_id = models.AutoField(primary_key=True, help_text="Id del lote")
    lote_fv = models.DateField( help_text="Fecha de vencimiento del lote")
    lote_pc = models.DecimalField(max_digits=5,decimal_places=2, help_text="Precio de compra del lote")
    lote_cant = models.IntegerField(help_text="Cantidad del lote")
    prod_id = models.ForeignKey(Producto, on_delete=models.CASCADE)
    prov_id = models.ForeignKey(Proveedor, on_delete=models.CASCADE)
    class Meta:
        db_table="t_lote"
        verbose_name_plural="Lotes"

class Almacen(models.Model):
    alma_id = models.AutoField(primary_key=True, help_text="Id del almacen")
    alma_nom= models.CharField(max_length=45, help_text="Nombre del almacen")
    alma_tipo= models.CharField(max_length=45, help_text="Tipo del almacen")
    class Meta:
        db_table="t_almacen"
        verbose_name_plural="Almacenes"

class MovimientoAlmacen(models.Model):
    ma_id = models.AutoField(primary_key=True, help_text="Id del Movimiento del Almacen")
    ma_operacion= models.CharField(max_length=45, help_text="Operacion del almacen")
    ma_cant = models.IntegerField(help_text="Cantidad del producto en el almacen")
    prod_id = models.ForeignKey(Producto, on_delete=models.CASCADE)
    alma_id = models.ForeignKey(Almacen, on_delete=models.CASCADE)
    class Meta:
        db_table="t_movimiento_alma"
        verbose_name_plural="Movimientos Almacen"

class Usuario(models.Model):
    usu_id = models.AutoField(primary_key=True, help_text="Id del usuario")
    usu_nom = models.CharField(max_length=45, help_text="Nombre del usuario")
    usu_ape = models.CharField(max_length=45, help_text="Apellido del usuario")
    usu_doc = models.CharField(max_length=45, help_text="Documento del usuario")
    usu_correo = models.CharField(max_length=45, help_text="Correo del usuario")
    usu_tipo = models.IntegerField(help_text="Tipo de usuario")
    class Meta:
        db_table="t_usuario"
        verbose_name_plural="Usuarios"

class CabeceraDocumento(models.Model):
    doc_id = models.AutoField(primary_key=True, help_text="Id de la cabecera")
    doc_tipo = models.CharField(max_length=45, help_text="Tipo de documento")
    doc_fecha = models.DateField(help_text="Fecha de la cabecera")
    doc_total = models.DecimalField(max_digits=5, decimal_places=2, help_text="Total de pago")
    vendedor = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    cliente = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    class Meta: 
        db_table="t_cabDocumento"
        verbose_name_plural="Cabeceras Documento"

class DetalleDocumento(models.Model):
    detalle_id= models.AutoField(primary_key=True, help_text="Id del detalle")
    detalle_cant = models.IntegerField(help_text="Cantidad del producto")
    detalle_precio = models.DecimalField(max_digits=5, decimal_places=2, help_text="Precio del detalle")
    doc_id = models.ForeignKey(DetalleDocumento, on_delete=models.CASCADE)
    prod_id = models.ForeignKey(Producto, on_delete=models.CASCADE)
    class Meta:
        db_table="t_detDocumento"
        verbose_name_plural="Detalles Documento"
