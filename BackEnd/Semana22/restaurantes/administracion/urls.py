from django.urls import path, include
from .views import UserViews
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('usuario',UserViews)

urlpatterns=[
    path('',include(router.urls)),
]