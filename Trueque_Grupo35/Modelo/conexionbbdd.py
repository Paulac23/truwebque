import mysql.connector
from mysql.connector import Error
try:
	connection=mysql.connector.connect(host='localhost',database='pythonbbdd',user='root',password='')
	if connection.is_connected():
			db_Info=connection.get_server_info()
			print("Conectado al servidor de mysql version", db_Info)
			cursor=connection.cursor()
			cursor.execute("select database();")
			record=cursor.fetchone()
			print("Estas conectado a: ", record)
except Error as e:
	print ("Error al conectarse al servidor", e)
finally:
	if connection.is_connected():
		cursor.close()
		connection.close()
		print("MySQL conexion cerrada.")
