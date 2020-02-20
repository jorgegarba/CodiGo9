from django.views.decorators.csrf import csrf_exempt
import json
from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import CategoriaModel


def listar_categorias(request):
    # SELECT * FROM t_categorias
    categorias = CategoriaModel.objects.all()
    print(categorias.values())
    return JsonResponse(
        {
            'mensaje': 'Lista de Categorias',
            'categorias': list(categorias.values('nueva_descripcion', 'activo'))
        }, status=200)


def listar_categorias_id(request, pk):
    categoria = get_object_or_404(CategoriaModel, pk=pk)
    data = {
        'ok': True,
        'contenido': {
            'descripcion': categoria.nueva_descripcion,
            'activo': categoria.activo
        }
    }
    return JsonResponse(data, status=200)


# Para evitar la validacion del middleware de CSRF usamos la siguiente excepcion en el decorador
# NOTA: Esto no es recomendable porque le estamos obligando a que no cumpla con ciertas condiciones de seguridad y se recomienda no hacerlo
@csrf_exempt
def agregarCategoria(request):
    if(request.method == "POST"):
        print(request.body)
        data = json.loads(request.body.decode('utf-8'))
        print(data)
        try:
            # SELECT * FROM CATEGORIA WHERE NUEVA_DESCRIPCION=DATA['NOMBRE']
            CategoriaModel.objects.get(nueva_descripcion=data['nombre'])
        except CategoriaModel.DoesNotExist:
            categoriaAgregada = CategoriaModel(
                nueva_descripcion=data['nombre'], activo=data['activo'])
            categoriaAgregada.save()
            return JsonResponse({
                'message': 'Categoria agregada con exito'
            }, status=201)
        return JsonResponse({
            'message': 'La categoria Ya existe'
        }, status=400)

    elif (request.method == "GET"):
        return JsonResponse({
            'message': 'Hizo GET'
        })
