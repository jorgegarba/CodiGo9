# esta es la libreria que sirve para especificar las rutas
from django.urls import path
from .views import listar_categorias, listar_categorias_id, agregarCategoria

urlpatterns=[
    path('categorias/',listar_categorias, name="Lista de Categorias"),
    path('categorias/<int:pk>',listar_categorias_id, name="Lista de Categorias Por ID"),
    path('categorias/crear', agregarCategoria, name="Agregar Categoria"),
]