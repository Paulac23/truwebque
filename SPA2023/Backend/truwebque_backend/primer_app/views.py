from django.shortcuts import render

from rest_framework import viewsets
from .serializer import PersonaSerializer, PublicacionSerializer, ComentariosSerializer, CarritoSerializer, SuscripcionSerializer
from .models import Persona, Publicacion, Comentarios, Carrito, Suscripcion

# Create your views here.
#Views Prueba 1

class PersonaViewSet(viewsets.ModelViewSet):
 queryset=Persona.objects.all()
 serializer_class= PersonaSerializer

class  PublicacionViewSet(viewsets.ModelViewSet):
 queryset= Publicacion.objects.all()
 serializer_class=  PublicacionSerializer

class ComentariosViewSet(viewsets.ModelViewSet):
 queryset=Comentarios.objects.all()
 serializer_class= ComentariosSerializer

class CarritoViewSet(viewsets.ModelViewSet):
 queryset=Carrito.objects.all()
 serializer_class= CarritoSerializer

class SuscripcionViewSet(viewsets.ModelViewSet):
 queryset=Suscripcion.objects.all()
 serializer_class= SuscripcionSerializer




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