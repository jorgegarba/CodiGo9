from django.urls import path
from .views import UnidadMedidaViews

urlpatterns=[
    path('um',UnidadMedidaViews.as_view(),name="Rutas de la tabla unidad de medida"),
]