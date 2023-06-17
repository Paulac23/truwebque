from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from .models import Publicacion, Suscripcion

User = get_user_model()
## Auth. de Usuarios usando Knox

#User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

#Registro serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs ={ 'password': {'write_only' : True}}

    def create(self, validated_data):
        user =User.objects.create_user (validated_data['username'], validated_data['email'], validated_data['password'])

        return user


class PublicacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publicacion
        fields = '__all__'


class SuscripcionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Suscripcion
        fields = '__all__'


#--------------------------------------------------------------------------------------
##from rest_framework import serializers
##from .models import Persona, Publicacion, Comentarios, Carrito, Suscripcion
##
##
##@api_view(['GET'])
##def persona_list(request):
##    persona= Persona.objects.all()
##    serializer= PersonaSerializer()
##    return Response(persona)
##
##class PersonaSerializer(serializers.ModelSerializer):
##    class Meta:
##        model = Persona
##        fields = '__all__'
##
##class PublicacionSerializer(serializers.ModelSerializer):
##    class Meta:
##        model = Publicacion
##        fields = '__all__'
##
##class ComentariosSerializer(serializers.ModelSerializer):
##    class Meta:
##        model = Comentarios
##        fields = '__all__'
##
##class CarritoSerializer(serializers.ModelSerializer):
##    class Meta:
##        model = Carrito
##        fields = '__all__'
##
##class SuscripcionSerializer(serializers.ModelSerializer):
##    class Meta:
##        model = Suscripcion
##        fields = '__all__'