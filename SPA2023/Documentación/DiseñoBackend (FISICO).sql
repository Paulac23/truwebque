-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema trueque2
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema trueque2
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `trueque2` DEFAULT CHARACTER SET utf8mb3 ;
USE `trueque2` ;

-- -----------------------------------------------------
-- Table `trueque2`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trueque2`.`categorias` (
  `idcategoria` INT NOT NULL,
  `nombre` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idcategoria`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `trueque2`.`Suscripcion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trueque2`.`Suscripcion` (
  `idSuscripcion` INT NOT NULL,
  `fecha_inicio` DATETIME NULL,
  `fecha_fin` DATETIME NULL,
  PRIMARY KEY (`idSuscripcion`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trueque2`.`personas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trueque2`.`personas` (
  `idpersonas` INT NOT NULL,
  `nombres` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `dni` VARCHAR(45) NOT NULL,
  `fecha_alta` DATETIME NOT NULL,
  `fecha_mod` DATETIME NULL DEFAULT NULL,
  `fecha_nac` DATETIME NOT NULL,
  `direccion` VARCHAR(45) NOT NULL,
  `ciudad` INT NOT NULL,
  `provincia` INT NOT NULL,
  `correo` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(45) NULL DEFAULT NULL,
  `idSuscripcion` INT NOT NULL,
  `idSuscripcion` INT NOT NULL,
  `usuario` VARCHAR(45) NOT NULL,
  `contraseña` VARCHAR(45) NOT NULL,
  `rol_admin` TINYINT NOT NULL,
  PRIMARY KEY (`idpersonas`),
  INDEX `fk_personas_Suscripcion1_idx` (`idSuscripcion` ASC) VISIBLE,
  INDEX `fk_personas_Suscripcion2_idx` (`idSuscripcion` ASC) VISIBLE,
  CONSTRAINT `fk_personas_Suscripcion1`
    FOREIGN KEY (`idSuscripcion`)
    REFERENCES `mydb`.`Suscripcion` (`idSuscripcion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_personas_Suscripcion2`
    FOREIGN KEY (`idSuscripcion`)
    REFERENCES `trueque2`.`Suscripcion` (`idSuscripcion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `trueque2`.`publicaciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trueque2`.`publicaciones` (
  `idpublicacion` INT NOT NULL,
  `categoria` INT NOT NULL,
  `usuario` INT NOT NULL,
  `estado` TINYINT NOT NULL,
  `titulo` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(1000) NOT NULL,
  `fecha_publicacion` DATETIME NOT NULL,
  `fecha_mod` DATETIME NULL DEFAULT NULL,
  `cantidad` VARCHAR(45) NOT NULL,
  `foto` BLOB NULL DEFAULT NULL,
  `preferencias` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idpublicacion`),
  INDEX `categoria_idx` (`categoria` ASC) VISIBLE,
  INDEX `usuario_idx` (`usuario` ASC) VISIBLE,
  CONSTRAINT `categoria`
    FOREIGN KEY (`categoria`)
    REFERENCES `trueque2`.`categorias` (`idcategoria`),
  CONSTRAINT `usuario`
    FOREIGN KEY (`usuario`)
    REFERENCES `trueque2`.`personas` (`idpersonas`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `trueque2`.`carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trueque2`.`carrito` (
  `idcarrito` INT NOT NULL,
  `carritocol` VARCHAR(45) NULL,
  `idpublicacion` INT NOT NULL,
  `idpersonas` INT NOT NULL,
  PRIMARY KEY (`idcarrito`, `idpublicacion`, `idpersonas`),
  INDEX `fk_carrito_publicaciones1_idx` (`idpublicacion` ASC) VISIBLE,
  INDEX `fk_carrito_personas1_idx` (`idpersonas` ASC) VISIBLE,
  CONSTRAINT `fk_carrito_publicaciones1`
    FOREIGN KEY (`idpublicacion`)
    REFERENCES `trueque2`.`publicaciones` (`idpublicacion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_carrito_personas1`
    FOREIGN KEY (`idpersonas`)
    REFERENCES `trueque2`.`personas` (`idpersonas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
