import mysql.connector

class Trueque():

    def __init__(self) -> None:
        try:
            self.conexion = mysql.connector.connect(
                host = 'localhost',
                port = 3306,
                user = 'root',
                password = 'ContraseñaBBDD',
                db = 'Trueque'

            )
        except mysql.connector.Error as descripcionError:
                print("¡No se conecto!,descripcionError")

#1° operacion del CRUD: CREATE O INSERT
    def InsertarValor(self,nombre,mail,ciudad):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL= "INSERT INTO Trueque VALUES(%s,%s,%s)"
                data= (nombre,mail,ciudad)

                cursor.execute(sentenciaSQL,data)
                self.conexion.commit()
                self.conexion.close()

            except:
                print("No se pudo conectar a la base de datos")
    
#2° operacion del CRUD: READ O LEER
    def BuscarObjeto(self):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor() 
                sentenciaSQL= "SELECT * from Trueque where ciudad like '%CABA%' "
                cursor.execute(sentenciaSQL)
                resultadoREAD = cursor.fetchall()
                self.conexion.close()
                return resultadoREAD

            except:
                print("No se pudo conectar a la base de datos")

                cursor = self.conexion.cursor()

                cursor = self.conexion.cursor()

#3° operacion del CRUD: UPDATE O ACTUALIZAR
    def ActualizarValor(self, ID):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL= "UPDATE from Trueque where id = ID"
                cursor.execute(sentenciaSQL)

                self.conexion.commit()
                self.conexion.close()
            except:
                print("No se pudo conectar a la base de datos")

#4° operacion del CRUD: DELETE O ELIMINAR
    def EliminarObjeto(self, ID):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor() 
                sentenciaSQL = "DELETE from Trueque where id = ID"
                cursor.execute(sentenciaSQL)

                self.conexion.commit()
                self.conexion.close()
            except:
                print("No se pudo conectar a la base de datos")
