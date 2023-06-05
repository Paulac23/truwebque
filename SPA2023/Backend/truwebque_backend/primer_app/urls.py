
from django.urls import path, include
from rest_framework import routers
from primer_app  import views

#Urls prueba 1

router= routers.DefaultRouter()
router.register(r'persona',views.PersonaViewSet)
router.register(r'publicacion',views.PublicacionViewSet)
router.register(r'comentarios',views.ComentariosViewSet)
router.register(r'carrito',views.CarritoViewSet)
router.register(r'suscripcion',views.SuscripcionViewSet)

urlpatterns = [
     path('', include(router.urls)),
]

#Urls prueba
#
#urlpatterns=[
#    path('personas/', PersonaView.as_view(), name='personas_list')
#]
