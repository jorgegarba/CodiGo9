from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import UnidadMedida, Grupo
from rest_framework import status
from .serializers import MiPrimerSerializador
# Create your views here.

# Las APIView funcionan en forma de clases, y dentro de ellas los metodos que se pueden sobreescribir son los verbos HTTP (get, post, put, delete, patch...)


class UnidadMedidaViews(APIView):
    def get(self, request, format=None):
        unidades = UnidadMedida.objects.all()

        print(unidades)
        for unidad in unidades:
            print(unidad.um_desc)
        return Response({
            "message": "ok",
            "contenido": "Las unidades de medida son:",
            # "respuesta": unidades
        }, status=status.HTTP_200_OK)


class ProbandoSerializadorViews(APIView):
    personas = []
    serializer_class = MiPrimerSerializador

    def get(self, request, format=None):
        """Devolver todas mis personas"""
        return Response({
            'message': 'Ok',
            'contenido': self.personas
        })
        # Validar si hay personas devuelve la lista y sino, que indique que aun no hay personas registradas

    def post(self, request, format=None):
        """Agregar una persona"""
        print(request.data)
        serializador = self.serializer_class(data=request.data)
        # el serializador tiene un metodo llamado is_valid que valida si toda la data ingresada concuerda con lo definido,
        print(serializador.is_valid())
        # hay un atributo llamado errors que nos va a devolver que error falta para que el serializador sea true la validacion
        print(serializador.errors)
        if serializador.is_valid():
            # Una vez que hemos hecho la validacion podemos traer la data ya validada con el atributo validated_data
            print(serializador.validated_data.get('nombre'))
            persona = {
                'nombre': serializador.validated_data.get('nombre'),
                'apellido': serializador.validated_data.get('apellido')
            }
            self.personas.append(persona)
            return Response({
                'message': 'Se agrego la persona con exito',
                'contenido': persona
            })
        else:
            return Response(serializador.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, id, format=None):
        """Editar una persona segun su id"""
        # Primero ver si existe ese id (posicion en la lista)
        # Verificar que lo mandado por el body este correctamente serializado
        # modificar esa posicion de la lista
        # retornar satisfactorio o error si no se encontro ese id
        longitud = len(self.personas)
        print(longitud)
        if id > longitud:
            return Response({
                'message':'Indice fuera de rango'
            })
        else:
            serializador = self.serializer_class(data=request.data)
            if serializador.is_valid():
                self.personas[id]['nombre']=serializador.validated_data.get('nombre')
                self.personas[id]['apellido']=serializador.validated_data.get('apellido')
                return Response({
                    'message': 'Se actualizo con exito'
                }, status=status.HTTP_200_OK)
            else:
                return Response(serializador.errors,status=status.HTTP_400_BAD_REQUEST)