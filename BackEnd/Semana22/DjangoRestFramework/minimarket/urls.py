from django.urls import path, include
from .views import UnidadMedidaViews, ProbandoSerializadorViews, GrupoViews, ProveedorViews

# PARA LOS VIEWSETS
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register('proveedor',ProveedorViews,basename="Proveedores")

urlpatterns=[
    path('um',UnidadMedidaViews.as_view(),name="Rutas de la tabla unidad de medida"),
    path('prueba', ProbandoSerializadorViews.as_view(), name="Prueba de serializador"),
    path('prueba/<int:id>', ProbandoSerializadorViews.as_view(),name="Prueba de serializador con parametros"),
    path('grupo', GrupoViews.as_view(), name="Rutas de la tabla Grupo"),
    path('grupo/<int:pk>',GrupoViews.as_view(),name="Ruta para traer un grupo en especifico"),
    # Una vez que ya tengo definida mi enrutamiento para los viewset ahora lo agrego a los urlpatterns
    path('',include(router.urls))
]