CREATE DATABASE  IF NOT EXISTS `truwebque_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `truwebque_db`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: truwebque_db
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
INSERT INTO `auth_group` VALUES (3,'Analista de Datos'),(2,'Desarrolladores de TruWebQue'),(1,'Moderador de Publicaciones');
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
INSERT INTO `auth_group_permissions` VALUES (1,1,34),(2,1,35),(3,1,36),(4,2,1),(5,2,2),(6,2,3),(7,2,4),(8,2,5),(9,2,6),(10,2,7),(11,2,8),(12,2,9),(13,2,10),(14,2,11),(15,2,12),(16,2,13),(17,2,14),(18,2,15),(19,2,16),(20,2,17),(21,2,18),(22,2,19),(23,2,20),(24,2,21),(25,2,22),(26,2,23),(27,2,24),(28,2,25),(29,2,26),(30,2,27),(31,2,28),(32,2,29),(33,2,30),(34,2,31),(35,2,32),(36,2,33),(37,2,34),(38,2,35),(39,2,36),(40,2,37),(41,2,38),(42,2,39),(43,2,40),(46,3,28),(44,3,32),(47,3,36),(45,3,40);
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add persona',7,'add_persona'),(26,'Can change persona',7,'change_persona'),(27,'Can delete persona',7,'delete_persona'),(28,'Can view persona',7,'view_persona'),(29,'Can add carrito',8,'add_carrito'),(30,'Can change carrito',8,'change_carrito'),(31,'Can delete carrito',8,'delete_carrito'),(32,'Can view carrito',8,'view_carrito'),(33,'Can add publicacion',9,'add_publicacion'),(34,'Can change publicacion',9,'change_publicacion'),(35,'Can delete publicacion',9,'delete_publicacion'),(36,'Can view publicacion',9,'view_publicacion'),(37,'Can add suscripcion',10,'add_suscripcion'),(38,'Can change suscripcion',10,'change_suscripcion'),(39,'Can delete suscripcion',10,'delete_suscripcion'),(40,'Can view suscripcion',10,'view_suscripcion'),(41,'Can add comentarios',11,'add_comentarios'),(42,'Can change comentarios',11,'change_comentarios'),(43,'Can delete comentarios',11,'delete_comentarios'),(44,'Can view comentarios',11,'view_comentarios');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$600000$x5zq2JaSkn23sJkRIVV87O$sqq0hk4EnWIo+KX3433CjJe8qv11+o34y4zMAyJEgaI=','2023-05-17 08:27:40.362658',1,'superuser','','','truwebque@gmail.com',1,1,'2023-05-17 08:20:12.437704'),(2,'pbkdf2_sha256$600000$SoIFNZ3Ql1QDVFeBcXvehN$Xw6I6imdkct93ULuSXEQvwOsU/rCPYT+/k/SJoCWmU0=',NULL,0,'roberto_osores','Roberto','Osores','mail@ejemplo.com',1,1,'2023-05-19 07:26:39.000000'),(3,'pbkdf2_sha256$600000$Q4gjuSzzquj7aWfr16d5ME$DHX6XM5MOyDEVK4GiLKp2zD81DpZQVMisHR86Gq93Zw=','2023-05-20 05:12:49.000000',0,'belen_riquelme','Belen','Riquelme','truwebque@gmail.com',1,1,'2023-05-20 05:04:51.000000'),(4,'pbkdf2_sha256$600000$wWuE0sT0NMmfJP7OwmifK8$pfQ+fHbeSciG5UHQGlMnDvQH3oet8BdP26kjPLSmHZI=','2023-05-20 05:13:18.000000',0,'paula_cabrera','Paula','Cabrera','truwebque@gmail.com',1,1,'2023-05-20 05:06:45.000000'),(5,'pbkdf2_sha256$600000$IJCE1NYaD0Mv57KYBJgmVw$CvqGK4MT4LX+8JJS22DovCiQ1hvvWO7qZv2qTVOqX+M=','2023-05-20 05:13:02.000000',0,'daniel_vargas','Daniel','Vargas','truwebque@gmail.com',1,1,'2023-05-20 05:09:48.000000'),(6,'pbkdf2_sha256$600000$swLK9EG5zv6K9q1OxwjX6p$ap/fuKrQaD2Ni5lE0KPDqykwf5ShdfGAvNKKgxqOalM=','2023-05-20 05:13:09.000000',0,'gonzalo_martin','Gonzalo','Martin','truwebque@gmail.com',1,1,'2023-05-20 05:10:56.000000'),(7,'pbkdf2_sha256$600000$PC1iGeY0qKQRuLm8WwD7xw$ahaiPVnDugpdViPsJsAZ8XzYoajOi8wOQofOqhaF/a0=','2023-05-20 05:16:06.000000',0,'pablo_vallejos','Pablo','Vallejos','truwebque@gmail.com',1,1,'2023-05-20 05:15:11.000000'),(8,'pbkdf2_sha256$600000$3RBWlO8sK6sbpncJMpU9Pk$w4IDkJ775E+7mcvBgWeFvEr3iE2whQ5E0DZL1rzePYM=','2023-05-20 05:16:52.000000',0,'mariela_lara','Mariela','Lara','truwebque@gmail.com',1,1,'2023-05-20 05:16:31.000000');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
INSERT INTO `auth_user_groups` VALUES (1,2,2),(2,3,2),(3,4,2),(4,5,2),(5,6,2),(6,7,1),(7,8,3);
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2023-05-19 07:26:39.944100','2','roberto_osores',1,'[{\"added\": {}}]',4,1),(2,'2023-05-19 07:30:23.460131','1','Moderador de Publicaciones',1,'[{\"added\": {}}]',3,1),(3,'2023-05-19 07:31:26.278488','2','Desarrolladores de TruWebQue',1,'[{\"added\": {}}]',3,1),(4,'2023-05-19 07:36:16.176342','2','roberto_osores',2,'[{\"changed\": {\"fields\": [\"First name\", \"Last name\", \"Email address\", \"Staff status\", \"Groups\"]}}]',4,1),(5,'2023-05-19 07:37:47.233854','3','Analista de Datos',1,'[{\"added\": {}}]',3,1),(6,'2023-05-20 05:04:51.717401','3','belen_riquelme',1,'[{\"added\": {}}]',4,1),(7,'2023-05-20 05:05:33.135356','3','belen_riquelme',2,'[{\"changed\": {\"fields\": [\"First name\", \"Last name\", \"Email address\", \"Staff status\", \"Groups\"]}}]',4,1),(8,'2023-05-20 05:06:45.584478','4','paula_cabrera',1,'[{\"added\": {}}]',4,1),(9,'2023-05-20 05:07:10.276157','4','paula_cabrera',2,'[{\"changed\": {\"fields\": [\"First name\", \"Last name\", \"Email address\", \"Staff status\", \"Groups\"]}}]',4,1),(10,'2023-05-20 05:09:49.092521','5','daniel_vargas',1,'[{\"added\": {}}]',4,1),(11,'2023-05-20 05:10:15.099008','5','daniel_vargas',2,'[{\"changed\": {\"fields\": [\"First name\", \"Last name\", \"Email address\", \"Staff status\", \"Groups\"]}}]',4,1),(12,'2023-05-20 05:10:56.349259','6','gonzalo_martin',1,'[{\"added\": {}}]',4,1),(13,'2023-05-20 05:11:25.172330','6','gonzalo_martin',2,'[{\"changed\": {\"fields\": [\"First name\", \"Last name\", \"Email address\", \"Staff status\", \"Groups\"]}}]',4,1),(14,'2023-05-20 05:12:56.346891','3','belen_riquelme',2,'[{\"changed\": {\"fields\": [\"Last login\"]}}]',4,1),(15,'2023-05-20 05:13:03.725456','5','daniel_vargas',2,'[{\"changed\": {\"fields\": [\"Last login\"]}}]',4,1),(16,'2023-05-20 05:13:10.966199','6','gonzalo_martin',2,'[{\"changed\": {\"fields\": [\"Last login\"]}}]',4,1),(17,'2023-05-20 05:13:19.221043','4','paula_cabrera',2,'[{\"changed\": {\"fields\": [\"Last login\"]}}]',4,1),(18,'2023-05-20 05:15:11.720285','7','pablo_vallejos',1,'[{\"added\": {}}]',4,1),(19,'2023-05-20 05:16:08.716743','7','pablo_vallejos',2,'[{\"changed\": {\"fields\": [\"First name\", \"Last name\", \"Email address\", \"Staff status\", \"Groups\", \"Last login\"]}}]',4,1),(20,'2023-05-20 05:16:31.450478','8','mariela_lara',1,'[{\"added\": {}}]',4,1),(21,'2023-05-20 05:16:54.838622','8','mariela_lara',2,'[{\"changed\": {\"fields\": [\"First name\", \"Last name\", \"Email address\", \"Staff status\", \"Groups\", \"Last login\"]}}]',4,1),(22,'2023-05-20 05:35:59.399634','1','Persona object (1)',1,'[{\"added\": {}}]',7,1),(23,'2023-05-20 05:39:16.355609','2','Persona object (2)',1,'[{\"added\": {}}]',7,1),(24,'2023-05-20 05:49:20.906285','1','Publicacion object (1)',1,'[{\"added\": {}}]',9,1),(25,'2023-05-20 05:51:12.764250','1','Comentarios object (1)',1,'[{\"added\": {}}]',11,1),(26,'2023-05-20 07:55:41.554585','1','Suscripcion object (1)',1,'[{\"added\": {}}]',10,1),(27,'2023-05-20 09:38:48.385396','3','Persona object (3)',1,'[{\"added\": {}}]',7,1),(28,'2023-05-20 09:41:13.111985','4','Persona object (4)',1,'[{\"added\": {}}]',7,1),(29,'2023-05-20 09:45:44.893057','2','Publicacion object (2)',1,'[{\"added\": {}}]',9,1),(30,'2023-05-20 09:48:45.984896','3','Publicacion object (3)',1,'[{\"added\": {}}]',9,1),(31,'2023-05-20 09:50:35.071601','2','Comentarios object (2)',1,'[{\"added\": {}}]',11,1),(32,'2023-05-20 09:53:06.849353','3','Comentarios object (3)',1,'[{\"added\": {}}]',11,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(8,'primer_app','carrito'),(11,'primer_app','comentarios'),(7,'primer_app','persona'),(9,'primer_app','publicacion'),(10,'primer_app','suscripcion'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2023-05-17 07:55:34.886355'),(2,'auth','0001_initial','2023-05-17 07:55:40.331364'),(3,'admin','0001_initial','2023-05-17 07:55:40.715086'),(4,'admin','0002_logentry_remove_auto_add','2023-05-17 07:55:40.773568'),(5,'admin','0003_logentry_add_action_flag_choices','2023-05-17 07:55:40.804247'),(6,'contenttypes','0002_remove_content_type_name','2023-05-17 07:55:41.064802'),(7,'auth','0002_alter_permission_name_max_length','2023-05-17 07:55:41.240688'),(8,'auth','0003_alter_user_email_max_length','2023-05-17 07:55:41.326870'),(9,'auth','0004_alter_user_username_opts','2023-05-17 07:55:41.412842'),(10,'auth','0005_alter_user_last_login_null','2023-05-17 07:55:41.676731'),(11,'auth','0006_require_contenttypes_0002','2023-05-17 07:55:41.700884'),(12,'auth','0007_alter_validators_add_error_messages','2023-05-17 07:55:41.732670'),(13,'auth','0008_alter_user_username_max_length','2023-05-17 07:55:41.884646'),(14,'auth','0009_alter_user_last_name_max_length','2023-05-17 07:55:42.043531'),(15,'auth','0010_alter_group_name_max_length','2023-05-17 07:55:42.112687'),(16,'auth','0011_update_proxy_permissions','2023-05-17 07:55:42.151426'),(17,'auth','0012_alter_user_first_name_max_length','2023-05-17 07:55:42.340028'),(18,'sessions','0001_initial','2023-05-17 07:55:42.518838'),(19,'primer_app','0001_initial','2023-05-19 05:44:47.427119'),(20,'primer_app','0002_remove_persona_dni_remove_persona_telefono_and_more','2023-05-19 05:44:47.621099'),(21,'primer_app','0003_delete_persona_delete_publicacion','2023-05-19 05:44:47.744933'),(22,'primer_app','0004_initial','2023-05-19 07:15:56.444502'),(23,'primer_app','0005_remove_persona_suscripcion_and_more','2023-05-20 04:54:08.705181'),(24,'primer_app','0006_initial','2023-05-20 05:23:06.653288'),(25,'primer_app','0007_alter_persona_telefono','2023-05-20 05:34:07.924045'),(26,'primer_app','0008_alter_publicacion_foto','2023-05-20 05:47:34.372013'),(27,'primer_app','0009_alter_carrito_id_carrito_alter_carrito_persona_and_more','2023-05-20 07:15:20.872800'),(28,'primer_app','0010_suscripcion_tipo','2023-05-20 07:54:40.870424'),(29,'primer_app','0011_alter_comentarios_options_alter_persona_options_and_more','2023-05-20 09:56:06.393220');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('ijdu3e7ia3pgwtrxj9pg4o9z0capx29w','.eJxVjEEOwiAQRe_C2hALDnRcuvcMhBkGqRpISrsy3l2bdKHb_977LxXiupSwdpnDlNRZDerwu1Hkh9QNpHust6a51WWeSG-K3mnX15bkedndv4MSe_nWcOTsTgktEmAkITSGjMlA4BEyAqeRfZTkcgaWgR1YA-RHILGGUL0_9_Y4fg:1pzCVY:CSHFmufgDmEXvFS_CbOwdnb4Ui5Zw6gGGs1lQL8_SsA','2023-05-31 08:27:40.401489');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `primer_app_carrito`
--

LOCK TABLES `primer_app_carrito` WRITE;
/*!40000 ALTER TABLE `primer_app_carrito` DISABLE KEYS */;
/*!40000 ALTER TABLE `primer_app_carrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `primer_app_comentarios`
--

LOCK TABLES `primer_app_comentarios` WRITE;
/*!40000 ALTER TABLE `primer_app_comentarios` DISABLE KEYS */;
INSERT INTO `primer_app_comentarios` VALUES (1,'Hola Ana me interesan los juguetes, todavía tenes policías y bomberos disponibles?','2023-05-20','2023-05-20',1,1),(2,'Hola, te interesaría un terreno en Maimará sin edificar? Confírmame para mas detalles','2023-05-20','2023-05-20',2,4),(3,'En unos días voy a estar por tu provincia, puedo acercarme a verla? Tengo para intercambiar varias cosas de cosmetologia.','2023-05-20','2023-05-20',3,2);
/*!40000 ALTER TABLE `primer_app_comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `primer_app_persona`
--

LOCK TABLES `primer_app_persona` WRITE;
/*!40000 ALTER TABLE `primer_app_persona` DISABLE KEYS */;
INSERT INTO `primer_app_persona` VALUES (1,'Juan Manuel','Perez',32101102,'2023-05-20','2023-05-20','Pasaje Trinidad 45','San Miguel de Tucuman','Tucuman','juanmape@gmail.com',381101112,'juanmape','juanmape',0,NULL),(2,'Ana Daniela','Gomez',12345678,'2023-05-20','2023-05-20','Avenida Velez Sarfield 1234','Ciudad Autonoma de Buenos Aires','Buenos Aires','artes_Ana@gmail.com',1115674533,'ArtesAna','artesana',0,NULL),(3,'Mario Miguel','Paredes',21348221,'2023-05-20','2023-05-20','Calle 41 Barrio los Olmos','Resistencia','Chaco','mmparedes@gmail.com',234674511,'mario31','mario31',0,NULL),(4,'Mariana','Torres',36756409,'2023-05-20','2023-05-20','Boulevard las Heras 1267','San Salvador de Jujuy','Jujuy','maimara@gmail.com',388169667,'lostekis','lostekis',0,NULL);
/*!40000 ALTER TABLE `primer_app_persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `primer_app_publicacion`
--

LOCK TABLES `primer_app_publicacion` WRITE;
/*!40000 ALTER TABLE `primer_app_publicacion` DISABLE KEYS */;
INSERT INTO `primer_app_publicacion` VALUES (1,0,'Juguetes Artesanales en madera','Intercambio juguetes artesanales realizados en madera de pino. Pintados a mano con materiales no tóxicos.\r\nModelos disponibles:\r\nPerros, gatos, policías, bomberos, enfermeros, médicos, autos, camiones\r\nSe aceptan pedidos específicos','2023-05-20','2023-05-20',20,'','Ropa de mujer','JUGU',2),(2,0,'Permuto Ford Fiesta','Ford Fiesta 1.6 5Ptas Se (Kd) - 2015\r\nNafta\r\n97000 km\r\nEscucho ofertas!','2023-05-20','2023-05-20',1,'','Inmuebles','VEHI',3),(3,1,'Nuevo  |  +10mil vendidos Licuadora Yelmo LC-1010 1.5 L ros','Capacidad de 1.5 L.\r\nSu potencia es de 700 W.\r\nCon base antideslizante.\r\nCuchilla resistente de acero inoxidable.\r\nTapa dosificadora incorporada.\r\nFunciona con 2 velocidades.\r\nPica hielo.\r\nTus preparaciones preferidas listas en pocos minutos.','2023-05-20','2023-05-20',15,'','Artículos de belleza','ELEC',1);
/*!40000 ALTER TABLE `primer_app_publicacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `primer_app_suscripcion`
--

LOCK TABLES `primer_app_suscripcion` WRITE;
/*!40000 ALTER TABLE `primer_app_suscripcion` DISABLE KEYS */;
INSERT INTO `primer_app_suscripcion` VALUES (1,'2023-05-20','2023-05-20','SUS1');
/*!40000 ALTER TABLE `primer_app_suscripcion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'truwebque_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-20  7:11:46
