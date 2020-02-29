from django.urls import path
from .views import UnidadMedidaViews, ProbandoSerializadorViews, GrupoViews

urlpatterns=[
    path('um',UnidadMedidaViews.as_view(),name="Rutas de la tabla unidad de medida"),
    path('prueba', ProbandoSerializadorViews.as_view(), name="Prueba de serializador"),
    path('prueba/<int:id>', ProbandoSerializadorViews.as_view(),name="Prueba de serializador con parametros"),
    path('grupo', GrupoViews.as_view(), name="Rutas de la tabla Grupo"),
    path('grupo/<int:pk>',GrupoViews.as_view(),name="Ruta para traer un grupo en especifico")
]