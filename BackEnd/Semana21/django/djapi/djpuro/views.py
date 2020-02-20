from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import CategoriaModel
# Create your views here.

def listar_categorias(request):
    # SELECT * FROM t_categorias
    categorias = CategoriaModel.objects.all()
    print(categorias.values())
    return JsonResponse(
    {
        'mensaje':'Lista de Categorias',
        'categorias': list(categorias.values('nueva_descripcion','activo'))
    },status=200)

def listar_categorias_id(request,pk):
    categoria = get_object_or_404(CategoriaModel,pk=pk)
    data = {
        'ok':True,
        'contenido': {
            'descripcion':categoria.nueva_descripcion,
            'activo': categoria.activo
        }
    }
    return JsonResponse(data, status=200)
