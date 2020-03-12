import re
from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializador(serializers.ModelSerializer):
    class Meta:
        model = User
        fields =['username','email','password','is_staff']
        # extra_kwargs sirve para definir los campos que vamos a solicitar al front que nos mande, pero que tengan un comportamiento diferente
        # https://www.django-rest-framework.org/api-guide/serializers/#additional-keyword-arguments
        extra_kwargs= {
            'password':{
                'write_only':True
            }
        }
    def create(self, validated_data):
        # hacer una validacion para que minimo de 8 caracters y un simbolo
        if re.match(r'[A-Za-z0-9@#$!.=&/+^%~]{8,15}',validated_data['password']):
            usuario = User(
                email=validated_data['email'],
                username=validated_data['username'],
                is_staff = validated_data['is_staff']
            )
            # aqui se encripta la contraseña con un sha256
            usuario.set_password(validated_data['password'])
            usuario.save()
            return usuario
        else:
            return {'username':'contraseña invalida', 'email':'contraseña invalida','is_staff':''}
    
    def update(self, instance, validated_data):
        """Actualizar la cuenta de un usuario"""
        if 'password' in validated_data:
            password = validated_data.pop('password')
            instance.set_password(password)
        return super().update(instance,validated_data)