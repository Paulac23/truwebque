from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Persona, Publicacion, Suscripcion

fields = list (UserAdmin.fieldsets)
fields[1] = ('Información Personal', {'fields': ('first_name', 'last_name', 'email', 'bio', 'imagen', 'suscripto')})
UserAdmin.fieldsets = tuple(fields)

admin.site.register(Persona, UserAdmin)


class PublicacionAdmin(admin.ModelAdmin):
    list_display= ("id_publicacion", "titulo", "categoria", "publicante")


class SuscripcionAdmin(admin.ModelAdmin):
    list_display= ("id_suscripcion","tipo", "fecha_inicio")


admin.site.register(Publicacion, PublicacionAdmin)
admin.site.register(Suscripcion,SuscripcionAdmin)


#---------------------------------------------------------------------
#from django.contrib import admin
#
#from  primer_app.models import Persona, Publicacion, Carrito, Suscripcion, Comentarios
#
## Register your models here.
#
#class PersonaAdmin(admin.ModelAdmin):
#    list_display= ("id_persona","usuario", "nombres", "apellidos", "correo")
#
#class PublicacionAdmin(admin.ModelAdmin):
#    list_display= ("id_publicacion", "titulo", "categoria", "publicante")
#
#class CarritoAdmin(admin.ModelAdmin):
#    list_display= ("id_carrito","persona")
#
#class SuscripcionAdmin(admin.ModelAdmin):
#    list_display= ("id_suscripcion","tipo", "fecha_inicio")
#
#class ComentariosAdmin(admin.ModelAdmin):
#    list_display= ("id_comentario","fecha_creacion", "usuario_comentante", "publicacion_comentada")
#
#admin.site.register(Persona, PersonaAdmin)
#admin.site.register(Publicacion, PublicacionAdmin)
#admin.site.register(Carrito, CarritoAdmin)
#admin.site.register(Suscripcion,SuscripcionAdmin)
#admin.site.register(Comentarios, ComentariosAdmin)