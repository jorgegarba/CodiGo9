from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.

def listar_categorias(request):
    return JsonResponse(
    {
        'mensaje':'Lista de Categorias'
    },status=200)