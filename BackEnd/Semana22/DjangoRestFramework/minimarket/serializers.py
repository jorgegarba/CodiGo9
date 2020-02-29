from rest_framework import serializers

class MiPrimerSerializador(serializers.Serializer):
    """Un Serializer es un campo de nombre para probar nuestra vista en nuestra API"""
    # si usamos un serializador comun tenemos que especificar que campos vamos a aceptar en nuestro serializador, un serializador es como un filtro para comprobar que todo lo que hemos definido este correctamente declarado
    nombre = serializers.CharField(max_length=10)
    apellido = serializers.CharField(max_length=15)