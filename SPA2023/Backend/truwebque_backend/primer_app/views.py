from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth import login
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import permissions, generics, viewsets
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.views import LoginView as KnoxLoginView
from knox.models import AuthToken
from .serializer import RegisterSerializer, UserSerializer, PublicacionSerializer, SuscripcionSerializer
from .models import Publicacion, Suscripcion
from django.contrib.auth.models import User

from django.contrib.auth import get_user_model

User = get_user_model()

#Endpoints de Knox

class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post (self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid (raise_exception = True)
        user= serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

class LoginAPI(KnoxLoginView):
    permission_classes = (permissions. AllowAny,)

    def post (self, request, format = None):
        serializer= AuthTokenSerializer(data=request.data)
        serializer.is_valid (raise_exception= True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginAPI, self).post(request, format=None)



class  PublicacionViewSet(viewsets.ModelViewSet):
 queryset= Publicacion.objects.all()
 serializer_class=  PublicacionSerializer

class SuscripcionViewSet(viewsets.ModelViewSet):
 queryset=Suscripcion.objects.all()
 serializer_class= SuscripcionSerializer



class UserViewSet(viewsets.ModelViewSet):
   queryset=User.objects.all()
   serializer_class=UserSerializer


#### Pruebas para implementar filtros
#@api_view(['GET'])
#def endpoints(request):
#    data = ['/usuarios', 'usuarios/:nombre_usuario']
#    return Response(data)
#
#@api_view(['GET'])
#def usuario_list (request):
#   data = ['Tito', 'Manu', 'Bianca']
#   return Response (data)
#
#@api_view(['GET'])
#def usuario_detail (request, nombre_usuario):
#    data = nombre_usuario
#    return Response (data)
#



#OLD
#------------------------------------------------------------------------------
#from django.shortcuts import render

#from rest_framework import viewsets
#from .serializer import PersonaSerializer, PublicacionSerializer, ComentariosSerializer, CarritoSerializer, SuscripcionSerializer
#from .models import Persona, Publicacion, Comentarios, Carrito, Suscripcion

#from rest_framework.response import Response
#from rest_framework.decorators import api_view
# Create your views here.

#------------------------------------------------------------------------------

#Views Prueba 1

#class PersonaViewSet(viewsets.ModelViewSet):
# queryset=Persona.objects.all()
# serializer_class= PersonaSerializer
#
#class  PublicacionViewSet(viewsets.ModelViewSet):
# queryset= Publicacion.objects.all()
# serializer_class=  PublicacionSerializer
#
#class ComentariosViewSet(viewsets.ModelViewSet):
# queryset=Comentarios.objects.all()
# serializer_class= ComentariosSerializer
#
#class CarritoViewSet(viewsets.ModelViewSet):
# queryset=Carrito.objects.all()
# serializer_class= CarritoSerializer
#
#class SuscripcionViewSet(viewsets.ModelViewSet):
# queryset=Suscripcion.objects.all()
# serializer_class= SuscripcionSerializer



#-----------------------------------------------------------


##Views Prueba 2
#
#class PersonaView(View):
#  
#    def get (self, request):
#      personas= list(Persona.objects.values())
#      if len(personas)>0:
#         datos={'message':"Exito en el GET", 'personas':personas}
#      else:
#         datos={'message':"No se encontraron usuarios para mostrar..."}
#         return JsonResponse(datos)
#         
#
#    def post(self, request):
#       pass
#
#    def putt(self, request):
#       pass
#
#    def delete(self, request):
#       pass
#