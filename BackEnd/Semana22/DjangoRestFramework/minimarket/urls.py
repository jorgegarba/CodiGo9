from django.urls import path
from .views import UnidadMedidaViews, ProbandoSerializadorViews

urlpatterns=[
    path('um',UnidadMedidaViews.as_view(),name="Rutas de la tabla unidad de medida"),
    path('prueba', ProbandoSerializadorViews.as_view(), name="Prueba de serializador"),
    path('prueba/<int:id>', ProbandoSerializadorViews.as_view(),name="Prueba de serializador con parametros")
]