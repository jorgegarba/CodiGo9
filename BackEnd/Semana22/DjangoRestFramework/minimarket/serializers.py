from rest_framework import serializers
from .models import UnidadMedida, Grupo, Proveedor, Producto

class MiPrimerSerializador(serializers.Serializer):
    """Un Serializer es un campo de nombre para probar nuestra vista en nuestra API"""
    # si usamos un serializador comun tenemos que especificar que campos vamos a aceptar en nuestro serializador, un serializador es como un filtro para comprobar que todo lo que hemos definido este correctamente declarado
    nombre = serializers.CharField(max_length=10)
    apellido = serializers.CharField(max_length=15)

class ProductosSerializador(serializers.ModelSerializer):
    class Meta:
        model=Producto
        fields=['nombre_producto','prod_prec']
class UnidadMedidaSerializador(serializers.ModelSerializer):
    # campo_extra=serializers.CharField(max_length=10)
    # Si ponemos el mismo nombre de related_name como el nombre de la instancia, ya no es necesario definir el parametro source y viceversa
    # productos = serializers.StringRelatedField( many=True)
    # productitos = serializers.PrimaryKeyRelatedField(source='productos', many=True, read_only=True)
    productosporserializador=ProductosSerializador(source='productos', many=True, read_only=True)
    class Meta:
        model=UnidadMedida
        # El atributo include sirve para indicar que atributos de mi modelo yo voy a utilizar, si pones '__all__' indicara que vas a usar todos, pero si quieres usar algunos en especificos va dentro de una lista
        fields='__all__'
        # El atributo exclude sirve para excluir que atributos no vas a utilizar, no se puede usar los dos a la vez, o es uno, o es el otro
        # exclude=['um_id']

class GrupoSerializador(serializers.ModelSerializer):
    class Meta:
        model= Grupo
        fields='__all__'

class ProveedorSerializador(serializers.ModelSerializer):
    class Meta:
        model= Proveedor
        fields='__all__'

class UmSerializador(serializers.ModelSerializer):
    class Meta:
        model=UnidadMedida
        fields=['um_desc']
class ProductoSerializador(serializers.ModelSerializer):
    # um = serializers.CharField(source='productos', read_only=True)
    # um = UmSerializador(source='productos', read_only=True)
    um = serializers.RelatedField(source='productos', read_only=True)
    print(um)
    class Meta:
        model = Producto
        fields= '__all__' #['nombre_producto', 'prod_prec','um']

