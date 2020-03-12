from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializador(serializers.ModelSerializer):
    class Meta:
        model = User
        fields =['username','email','password']
        # extra_kwargs sirve para definir los campos que vamos a solicitar al front que nos mande, pero que tengan un comportamiento diferente
        # https://www.django-rest-framework.org/api-guide/serializers/#additional-keyword-arguments
        extra_kwargs= {
            'password':{
                'write_only':True
            }
        }
    def create(self, validated_data):
        usuario = User(
            email=validated_data['email'],
            username=validated_data['username']
        )
        # aqui se encripta la contraseña con un sha256
        usuario.set_password(validated_data['password'])
        usuario.save()
        return usuario