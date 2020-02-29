from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import UnidadMedida, Grupo
from rest_framework import status
from .serializers import MiPrimerSerializador, UnidadMedidaSerializador, GrupoSerializador
# Create your views here.

# Las APIView funcionan en forma de clases, y dentro de ellas los metodos que se pueden sobreescribir son los verbos HTTP (get, post, put, delete, patch...)


class UnidadMedidaViews(APIView):
    def get(self, request, format=None):
        unidades = UnidadMedida.objects.all()
        data = UnidadMedidaSerializador(unidades, many=True).data
        # en el caso de pasar una data extraida de la base de datos ya no es necesario usar el metodo de validacion (is_valid()) y simplemente se llama a su atributo data el cual retornara un diccionario ordenado y listo para mostrar
        print(data)
        # for unidad in unidades:
        #     print(unidad.um_desc)
        return Response({
            "message": "ok",
            "contenido": "Las unidades de medida son:",
            "respuesta": data
        }, status=status.HTTP_200_OK)
    def post(self, request, format=None):
        serializador = UnidadMedidaSerializador(data=request.data)
        if serializador.is_valid():
            serializador.save()
            print(serializador.data)
            print(serializador.validated_data)
            # validated_data => nos devuelve la data validada, solamente la que nosotros le hemos pasado
            # data => nos devuelve TODO el objeto creado, inclusive campos que no hemos ingresado pero que al momento de guardar en la bd (save()) se han generado automaticamente como por ejemplo um_id
            return Response({
                'message':'ok',
                'contenido':{
                    'id':serializador.data['um_id'],
                    'descripcion':serializador.data['um_desc']
                }
            }, status=status.HTTP_201_CREATED)
        else:
            return Response(serializador.errors, status=status.HTTP_400_BAD_REQUEST)


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

class GrupoViews(APIView):
    def get(self,request,pk, format=None):
        """Traer un grupo segun su pk"""
        # try:
        #     grupo = Grupo.objects.filter(grup_id=pk)[0]
        #     print(grupo.grup_id)
        #     print(grupo.grup_nom)
        #     grupo = Grupo.objects.get(grup_id=pk)
        #     # get_object_or_404
        #     if grupo:
        #         return Response({
        #             'message':'ok',
        #             'contenido':{
        #                 'id': grupo.grup_id,
        #                 'nombre':grupo.grup_nom
        #             }
        #         })
        # except:
        #     return Response({
        #         'message':'false',
        #         'contenido':'Error, no hay ese grupo'
        #     },status=status.HTTP_404_NOT_FOUND)

        # ahora con el get_object_or_404
        grupo = get_object_or_404(Grupo,pk=pk)
        data = GrupoSerializador(grupo, many=False).data
        print(data)
        return Response({
            'message':'ok',
            'contenido':{
                'id':data['grup_id'],
                'nombre':data['grup_nom']
            }
        })

    def post(self, request, format=None):
        data = request.data
        grupo = Grupo.objects.create(grup_nom=data['grup_nom'])
        grupo.save()
        return Response({
            'message':'ok',
            'contenido':{
                'id': grupo.grup_id,
                'nombre':grupo.grup_nom
            }
        },status=status.HTTP_201_CREATED)