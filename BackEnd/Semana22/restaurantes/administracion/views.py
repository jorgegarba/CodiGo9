from django.shortcuts import render
from .serializers import UserSerializador
from rest_framework.viewsets import ModelViewSet
from django.contrib.auth.models import User
# Create your views here.

class UserViews(ModelViewSet):
    serializer_class=UserSerializador
    queryset=User.objects.all()