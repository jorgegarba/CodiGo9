from django.contrib import admin
from .models import Restaurante, Sucursal, Horario
# Register your models here.
class HorarioAdmin(admin.ModelAdmin):
    # Es para definir la forma en la que queremos hacer la visualizacion de los datos, esto sobreescribe al __str__ ya definido en el modelo
    list_display=("sucursal","apertura","cierre","dia")
    # Campo para definir la busqueda dentro del panel administrativo, puede ser uno o varios campos a buscar
    search_fields=("dia","apertura",)
    # campos para filtrar genera una lista con todos los resultados a la derecha para poder hacer combinaciones y filtrar la data
    list_filter=("sucursal","dia")
    # un filtro exclusivo para las fechas
    date_hierarchy="aniversario"

admin.site.register(Restaurante)
admin.site.register(Sucursal)
admin.site.register(Horario, HorarioAdmin)