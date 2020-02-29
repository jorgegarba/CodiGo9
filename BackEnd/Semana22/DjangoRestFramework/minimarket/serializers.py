from rest_framework import serializers
from .models import UnidadMedida, Grupo

class MiPrimerSerializador(serializers.Serializer):
    """Un Serializer es un campo de nombre para probar nuestra vista en nuestra API"""
    # si usamos un serializador comun tenemos que especificar que campos vamos a aceptar en nuestro serializador, un serializador es como un filtro para comprobar que todo lo que hemos definido este correctamente declarado
    nombre = serializers.CharField(max_length=10)
    apellido = serializers.CharField(max_length=15)

class UnidadMedidaSerializador(serializers.ModelSerializer):
    # campo_extra=serializers.CharField(max_length=10)
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