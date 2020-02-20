from django.db import models

# Create your models here.

class CategoriaModel (models.Model):
    # DEFINIR TODOS LOS CAMPOS DE LA TABLA
    # automaticamente se crean las PK pero se crea con el nombre "ID" entonces si nosotros queremos sobreescribir esa creacion automatica seria de la sgte manera:
    id_categoria = models.AutoField(
        auto_created=True,
        unique= True,
        primary_key= True,
        null = False
        )
        # si quiere mas documentacion visite: https://docs.djangoproject.com/en/3.0/topics/db/models/
    nueva_descripcion= models.CharField(max_length=100, unique=True)
    activo = models.BooleanField(default=True)

    def __str__(self):
        """Metodo magico para sobreescribir la lectura por defecto del objeto"""
        return 'La categoria es: {}'.format(self.nueva_descripcion)

    # La clase Meta se usa para configurar mi tabla de mi base de datos
    class Meta:
        # para cambiar el nombre de la tabla
        db_table= "t_categoria"
