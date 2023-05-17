-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`suscripcion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`suscripcion` (
  `idsuscripcion` INT NOT NULL,
  `fecha_inicio` DATETIME NOT NULL,
  `fecha_fin` DATETIME NOT NULL,
  PRIMARY KEY (`idsuscripcion`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`personas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`personas` (
  `idpersonas` INT NOT NULL,
  `nombres` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `dni` INT NOT NULL,
  `fecha_alta` DATETIME NOT NULL,
  `fecha_mod` DATETIME NOT NULL,
  `fecha_nac` DATETIME NOT NULL,
  `direccion` VARCHAR(45) NOT NULL,
  `ciudad` INT NOT NULL,
  `provincia` INT NOT NULL,
  `correo` VARCHAR(45) NOT NULL,
  `telefono` INT NOT NULL,
  `usuario` VARCHAR(45) NOT NULL,
  `contraseña` VARCHAR(45) NOT NULL,
  `rol_admin` TINYINT(10) NOT NULL,
  `suscripcion_idsuscripcion` INT NOT NULL,
  PRIMARY KEY (`idpersonas`),
  UNIQUE INDEX `idpersonas_UNIQUE` (`idpersonas` ASC) VISIBLE,
  UNIQUE INDEX `dni_UNIQUE` (`dni` ASC) VISIBLE,
  INDEX `fk_personas_suscripcion1_idx` (`suscripcion_idsuscripcion` ASC) VISIBLE,
  CONSTRAINT `fk_personas_suscripcion1`
    FOREIGN KEY (`suscripcion_idsuscripcion`)
    REFERENCES `mydb`.`suscripcion` (`idsuscripcion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`publicacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`publicacion` (
  `idpublicacion` INT NOT NULL,
  `estado` TINYINT NOT NULL,
  `titulo` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `fecha_publicacion` DATETIME NOT NULL,
  `fecha_mod` DATETIME NULL,
  `cantidad` INT NOT NULL,
  `foto` BLOB NULL,
  `preferencias` VARCHAR(45) NOT NULL,
  `categoria` INT NOT NULL,
  `personas_idpersonas1` INT NOT NULL,
  PRIMARY KEY (`idpublicacion`),
  INDEX `fk_publicacion_personas1_idx` (`personas_idpersonas1` ASC) VISIBLE,
  CONSTRAINT `fk_publicacion_personas1`
    FOREIGN KEY (`personas_idpersonas1`)
    REFERENCES `mydb`.`personas` (`idpersonas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`carrito` (
  `idcarrito` INT NOT NULL,
  `publicacion_idpublicacion` INT NOT NULL,
  `personas_idpersonas` INT NOT NULL,
  PRIMARY KEY (`idcarrito`),
  INDEX `fk_carrito_publicacion1_idx` (`publicacion_idpublicacion` ASC) VISIBLE,
  INDEX `fk_carrito_personas1_idx` (`personas_idpersonas` ASC) VISIBLE,
  CONSTRAINT `fk_carrito_publicacion1`
    FOREIGN KEY (`publicacion_idpublicacion`)
    REFERENCES `mydb`.`publicacion` (`idpublicacion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_carrito_personas1`
    FOREIGN KEY (`personas_idpersonas`)
    REFERENCES `mydb`.`personas` (`idpersonas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
