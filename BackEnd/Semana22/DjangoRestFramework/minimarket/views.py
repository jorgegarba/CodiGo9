from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import UnidadMedida, Grupo
from rest_framework import status
# Create your views here.

# Las APIView funcionan en forma de clases, y dentro de ellas los metodos que se pueden sobreescribir son los verbos HTTP (get, post, put, delete, patch...)
class UnidadMedidaViews(APIView):
    def get(self, request, format=None):
        unidades = UnidadMedida.objects.all()
        print(unidades)
        return Response({
            "message":"ok",
            "contenido":"Las unidades de medida son:"
        },status=status.HTTP_200_OK)