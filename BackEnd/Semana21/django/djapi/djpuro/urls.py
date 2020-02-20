# esta es la libreria que sirve para especificar las rutas
from django.urls import path
from .views import listar_categorias

urlpatterns=[
    path('categorias/',listar_categorias, name="Lista de Categorias")
]