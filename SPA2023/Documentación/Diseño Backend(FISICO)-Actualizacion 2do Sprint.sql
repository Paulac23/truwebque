-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema truwebque_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema truwebque_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `truwebque_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `truwebque_db` ;

-- -----------------------------------------------------
-- Table `truwebque_db`.`primer_app_suscripcion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `truwebque_db`.`primer_app_suscripcion` (
  `id_suscripcion` INT NOT NULL AUTO_INCREMENT,
  `fecha_inicio` DATE NOT NULL,
  `fecha_fin` DATE NOT NULL,
  `tipo` VARCHAR(4) NULL DEFAULT NULL,
  PRIMARY KEY (`id_suscripcion`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `truwebque_db`.`primer_app_persona`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `truwebque_db`.`primer_app_persona` (
  `id_persona` INT NOT NULL AUTO_INCREMENT,
  `nombres` VARCHAR(60) NOT NULL,
  `apellidos` VARCHAR(60) NOT NULL,
  `dni` INT NOT NULL,
  `fecha_alta` DATE NOT NULL,
  `fecha_modificacion` DATE NOT NULL,
  `direccion` VARCHAR(60) NOT NULL,
  `ciudad` VARCHAR(60) NOT NULL,
  `provincia` VARCHAR(60) NOT NULL,
  `correo` VARCHAR(254) NOT NULL,
  `telefono` BIGINT NOT NULL,
  `usuario` VARCHAR(15) NOT NULL,
  `contraseña` VARCHAR(15) NOT NULL,
  `rol_admin` TINYINT(1) NOT NULL,
  `suscripcion_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id_persona`),
  INDEX `primer_app_persona_suscripcion_id_4342d63a_fk_primer_ap` (`suscripcion_id` ASC) VISIBLE,
  CONSTRAINT `primer_app_persona_suscripcion_id_4342d63a_fk_primer_ap`
    FOREIGN KEY (`suscripcion_id`)
    REFERENCES `truwebque_db`.`primer_app_suscripcion` (`id_suscripcion`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `truwebque_db`.`primer_app_carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `truwebque_db`.`primer_app_carrito` (
  `id_carrito` INT NOT NULL AUTO_INCREMENT,
  `persona_id` INT NOT NULL,
  `suscripcion_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id_carrito`),
  INDEX `primer_app_carrito_persona_id_7de3d617_fk_primer_ap` (`persona_id` ASC) VISIBLE,
  INDEX `primer_app_carrito_suscripcion_id_697a30d6_fk_primer_ap` (`suscripcion_id` ASC) VISIBLE,
  CONSTRAINT `primer_app_carrito_persona_id_7de3d617_fk_primer_ap`
    FOREIGN KEY (`persona_id`)
    REFERENCES `truwebque_db`.`primer_app_persona` (`id_persona`),
  CONSTRAINT `primer_app_carrito_suscripcion_id_697a30d6_fk_primer_ap`
    FOREIGN KEY (`suscripcion_id`)
    REFERENCES `truwebque_db`.`primer_app_suscripcion` (`id_suscripcion`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `truwebque_db`.`primer_app_publicacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `truwebque_db`.`primer_app_publicacion` (
  `id_publicacion` INT NOT NULL AUTO_INCREMENT,
  `estado` TINYINT(1) NOT NULL,
  `titulo` VARCHAR(60) NOT NULL,
  `descripcion` LONGTEXT NOT NULL,
  `fecha_publicacion` DATE NOT NULL,
  `fecha_modificacion` DATE NOT NULL,
  `cantidad` INT NOT NULL,
  `foto` VARCHAR(100) NULL DEFAULT NULL,
  `preferencias_de_trueque` VARCHAR(60) NOT NULL,
  `categoria` VARCHAR(4) NOT NULL,
  `publicante_id` INT NOT NULL,
  PRIMARY KEY (`id_publicacion`),
  INDEX `primer_app_publicaci_publicante_id_b36fcf4a_fk_primer_ap` (`publicante_id` ASC) VISIBLE,
  CONSTRAINT `primer_app_publicaci_publicante_id_b36fcf4a_fk_primer_ap`
    FOREIGN KEY (`publicante_id`)
    REFERENCES `truwebque_db`.`primer_app_persona` (`id_persona`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `truwebque_db`.`primer_app_comentarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `truwebque_db`.`primer_app_comentarios` (
  `id_comentario` INT NOT NULL AUTO_INCREMENT,
  `contenido` LONGTEXT NOT NULL,
  `fecha_creacion` DATE NOT NULL,
  `fecha_modificacion` DATE NOT NULL,
  `publicacion_comentada_id` INT NOT NULL,
  `usuario_comentante_id` INT NOT NULL,
  PRIMARY KEY (`id_comentario`),
  INDEX `primer_app_comentari_publicacion_comentad_55a75eac_fk_primer_ap` (`publicacion_comentada_id` ASC) VISIBLE,
  INDEX `primer_app_comentari_usuario_comentante_i_6257896d_fk_primer_ap` (`usuario_comentante_id` ASC) VISIBLE,
  CONSTRAINT `primer_app_comentari_publicacion_comentad_55a75eac_fk_primer_ap`
    FOREIGN KEY (`publicacion_comentada_id`)
    REFERENCES `truwebque_db`.`primer_app_publicacion` (`id_publicacion`),
  CONSTRAINT `primer_app_comentari_usuario_comentante_i_6257896d_fk_primer_ap`
    FOREIGN KEY (`usuario_comentante_id`)
    REFERENCES `truwebque_db`.`primer_app_persona` (`id_persona`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
