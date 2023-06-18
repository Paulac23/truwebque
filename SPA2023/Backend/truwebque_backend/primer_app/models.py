from django.db import models
from django.contrib.auth.models import AbstractUser
#Create your models here.

# DESHABILITO LA CLASE PERSONA PARA RUEBAS DE: Implementar Abstract User con Extended Fields & Sistema de login con token
#
#class Persona(models.Model):
#    id_persona = models.AutoField(primary_key=True,verbose_name="ID de Usuario") #AutoField genera un valor numerico autoincremental al momento de crearse la entrada en la base de datos
#    nombres = models.CharField(max_length=60, verbose_name="Nombre/s")
#    apellidos = models.CharField(max_length=60, verbose_name="Apellido/s")
#    dni = models.IntegerField(verbose_name="DNI")
#    fecha_alta = models.DateField(auto_now_add=True, verbose_name="Fecha de creación") #auto_now_add genera el valor de la fecha en el momento en que la entrada es creada a la base de datos
#    fecha_modificacion = models.DateField(auto_now=True) #auto_now genera el valor fecha cada vez que se modifica la entrada del objeto
#    direccion = models.CharField(max_length=60)
#    ciudad = models.CharField(max_length=60)
#    provincia = models.CharField(max_length=60)
#    correo = models.EmailField(verbose_name="E-mail")
#    telefono = models.BigIntegerField()
#    usuario = models.CharField(max_length=15,verbose_name="Nombre de Usuario")
#    contraseña = models.CharField(max_length=15)
#    rol_admin = models.BooleanField(verbose_name="Usuario Administrador")
#    suscripcion = models.ForeignKey("Suscripcion", on_delete= models.PROTECT, null = True, blank = True) #la class Suscripcion esta entre comillas por que aun no fue definida(leyendo de arriba hacia abajo) y por lo tanto no puede ser referenciada
#
#    class Meta:
#        verbose_name_plural = 'Usuarios'

class Persona(AbstractUser):
    bio = models.TextField(max_length=250, default="Ingresa tu biografia aqui", blank=True, null=True)
    imagen = models.ImageField(null=True, blank=True, verbose_name="Foto de Perfil")
    suscripto = models.ForeignKey("Suscripcion", on_delete= models.PROTECT, null = True, blank = True)

class Publicacion(models.Model):
    id_publicacion = models.AutoField(primary_key=True, verbose_name="ID de Publicación")
    estado = models.BooleanField(verbose_name="Objeto sin uso")
    titulo = models.CharField(max_length=60)
    descripcion = models.TextField(max_length=250)
    fecha_publicacion = models.DateField(auto_now_add=True,verbose_name="Fecha de Publicación")
    fecha_modificacion = models.DateField(auto_now=True, verbose_name="Fecha de Modificación")
    cantidad = models.IntegerField()
    foto = models.ImageField(null=True, blank=True, verbose_name="Imagen")
    preferencias_de_trueque = models.CharField(max_length=60)
    #Defino las constantes que usaremos como categorias (Agregaremos mas despues) para las publicaciones de productos/servicios en un menu de seleccion llamado choices
    VEHICULOS = "VEHI"
    ELECTRODOMESTICOS = "ELEC"
    COMESTIBLES = "COME"
    HOGAR = "HOGA"
    JUGUETES = "JUGU"
    INDUMENTARIA = "INDU"
    OTROS = "OTRO"
    #Defino una constante mas, una tupla/lista que contiene a las constantes anteriores
    CATEGORIAS_CHOICES = [(VEHICULOS, "Vehiculos"), (ELECTRODOMESTICOS, "Electrodomesticos"), (COMESTIBLES, "Comestibles"), (HOGAR, "Hogar"), (JUGUETES, "Juegos y Juguetes"), (INDUMENTARIA, "Indumentaria y Moda"), (OTROS, "Otro")]
    #Finalmente defino a categoria usando la funcion choices que usa como argumento la tupla!
    categoria = models.CharField(max_length=4,verbose_name="Categoria del Articulo", choices=CATEGORIAS_CHOICES)
    publicante = models.ForeignKey(Persona, on_delete = models.CASCADE, verbose_name="Usuario Publicante")
    #La funcion on_delete borrara todas las publicaciones de la BD si la FK a la que referencio ya no existe. on_delete es obligatorio en todas las FK
    #Ejem: Si un usuario elimina su cuenta, la funcion on_delete borrara todas las publicaciones de productos asociadas.

    class Meta:
        verbose_name_plural = 'Publicaciones'

#Debido al cambio del modelo de negocios, prescindiremos de los comentarios
#class Comentarios(models.Model):
#    id_comentario = models.AutoField(primary_key=True,verbose_name="ID del Comentario")
#    contenido = models.TextField(max_length=250)
#    fecha_creacion = models.DateField(auto_now=True,verbose_name="Fecha de Publicación")
#    fecha_modificacion = models.DateField(auto_now=True, verbose_name="Fecha de Modificación")
#    publicacion_comentada = models.ForeignKey(Publicacion, on_delete= models.CASCADE, verbose_name="Publicación Comentada")
#    usuario_comentante = models.ForeignKey(Persona, on_delete=models.CASCADE, verbose_name="Usuario que Comenta")
#
#    class Meta:
#        verbose_name_plural = 'Comentarios'
#

#Debido al cambio del modelo de negocios, prescindiremos de los carritos
#class Carrito(models.Model):
#    id_carrito = models.AutoField(primary_key=True, verbose_name="ID del Carrito")
#    suscripcion = models.ForeignKey("Suscripcion", on_delete= models.PROTECT, null =True, blank=True)
#    persona = models.ForeignKey(Persona, on_delete= models.CASCADE, verbose_name="Usuario Dueño del Carrito")
#    #con el nuevo modelo de negocios no se podran agregar los articulos pulicados para trueque al carrito
#    #pero dejo la entrada comentada por si necesitamos reusarla
#    #publicacion = models.ForeignKey(Publicacion, on_delete= models.PROTECT, null=True, blank= True)
    
class Suscripcion(models.Model):
    id_suscripcion = models.AutoField(primary_key=True, verbose_name="ID de la Suscripción")
    SUSCRIPCION_1 = "SUS1"
    SUSCRIPCION_2 = "SUS2"
    SUSCRIPCION_3 = "SUS3"
    SUSCRIPCION_4 = "SUS4"
    SUSCRIPCION_5 = "SUS5"
    TIPO_CHOICES = [( SUSCRIPCION_1, "Suscripcion Tipo 1"), (SUSCRIPCION_2, "Suscripcion Tipo 2"), (SUSCRIPCION_3, "Suscripcion Tipo 3"), (SUSCRIPCION_4, "Suscripcion Tipo 4"), (SUSCRIPCION_5, "Suscripcion Tipo 5"),]
    tipo = models.CharField(max_length=4, choices= TIPO_CHOICES, null=True, blank=True, verbose_name= "Tipo de Suscripción")
    fecha_inicio = models.DateField(auto_now_add=True)
    fecha_fin = models.DateField()

    class Meta:
        verbose_name_plural = 'Suscripciones'