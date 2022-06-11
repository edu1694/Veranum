from django.urls import path
from .views import home,reservas, recomendaciones,recepcionista,habitaciones,contacto,registro

urlpatterns = [
    path('', home, name="home"),
    path('reservas/', reservas, name="reservas"),
    path('recomendaciones/', recomendaciones, name="recomendaciones"),
    path('recepcionista/', recepcionista, name="recepcionista"),
    path('habitaciones/', habitaciones, name="habitaciones"),
    path('contacto/', contacto, name="contacto"),
    path('registro/', registro,name="registro"),
]