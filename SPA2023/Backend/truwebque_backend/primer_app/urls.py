from django.urls import path, include
from rest_framework import routers

from . import views
from .views import RegisterAPI, LoginAPI, PublicacionViewSet, SuscripcionViewSet
from knox import views as knox_views

from django.contrib.auth import get_user_model

User = get_user_model()

router = routers.DefaultRouter()
router.register(r'publicacion',views.PublicacionViewSet)
router.register(r'suscripcion',views.SuscripcionViewSet)
router.register(r'usuarios',views.UserViewSet)


urlpatterns = [
    
    #path ('usuarios/', views.usuario_list),
    #path ('usuarios/<str:nombre_usuario>', views.usuario_detail),
    path ('auth/register', RegisterAPI.as_view(), name ='register'),
    path ('auth/login', LoginAPI.as_view(), name = 'login'),
    path ('auth/logout', knox_views.LogoutView.as_view(), name = 'logout'),
    path('api/', include(router.urls))
]





#------------------------------------------------------------------------------

#from django.urls import path, include
#from rest_framework import routers
#from primer_app  import views
#
#
##Urls prueba 1
#
#router= routers.DefaultRouter()
#router.register(r'persona',views.persona_list)
#router.register(r'publicacion',views.PublicacionViewSet)
#router.register(r'comentarios',views.ComentariosViewSet)
#router.register(r'carrito',views.CarritoViewSet)
#router.register(r'suscripcion',views.SuscripcionViewSet)
#
#urlpatterns = [
#     path('', include(router.urls)),
#]





#Urls prueba 2
#
#urlpatterns=[
#    path('personas/', PersonaView.as_view(), name='personas_list')
#]
