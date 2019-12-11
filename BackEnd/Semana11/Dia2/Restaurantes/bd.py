from flask import Flask
from flask_mysqldb import MySQL

app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] = 'restaurante'

mysql = MySQL(app)
# VAMOS A HACER UN SISTEMA DE RESTAURANTE EN EL CUAL VENDAMOS UNOS PLATOS A LA CARTA, MENU Y OTRAS OPCIONES SELECCIONANDO LA MESA Y TERMINANDO EL PEDIDO INDICANDO SU TOTAL A PAGAR, TODO POR MEDIO DE UN PREGISTRO DEL MOZO PARA MANEJAR SUS COMISIONES Y VENTAS.


@app.before_first_request
def inicializar_bd():
    cur = mysql.connection.cursor()
    crear_tablas = """
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema restaurante
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema restaurante
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `restaurante` DEFAULT CHARACTER SET utf8 ;
USE `restaurante` ;

-- -----------------------------------------------------
-- Table `restaurante`.`t_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurante`.`t_usuario` (
  `usu_id` INT NOT NULL AUTO_INCREMENT,
  `usu_nom` VARCHAR(45) NULL,
  `usu_ape` VARCHAR(45) NULL,
  `usu_tipo` VARCHAR(1) NULL,
  `usu_hash` TEXT NULL,
  `usu_salt` TEXT NULL,
  `usu_fecha` DATE NULL,
  PRIMARY KEY (`usu_id`),
  UNIQUE INDEX `usu_id_UNIQUE` (`usu_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `restaurante`.`t_mesa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurante`.`t_mesa` (
  `mesa_id` INT NOT NULL,
  `mesa_capacidad` INT NULL,
  `mesa_estado` TINYINT NULL,
  PRIMARY KEY (`mesa_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `restaurante`.`t_tipoMoneda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurante`.`t_tipoMoneda` (
  `tm_id` INT NOT NULL,
  `tm_cambio` DECIMAL NULL,
  `tm_moneda` VARCHAR(45) NULL,
  PRIMARY KEY (`tm_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `restaurante`.`t_asignacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurante`.`t_asignacion` (
  `asig_id` INT NOT NULL,
  `asig_fecha` DATE NULL,
  `t_mesa_mesa_id` INT NOT NULL,
  `t_usuario_usu_id` INT NOT NULL,
  PRIMARY KEY (`asig_id`),
  INDEX `fk_t_asignacion_t_mesa1_idx` (`t_mesa_mesa_id` ASC) VISIBLE,
  INDEX `fk_t_asignacion_t_usuario1_idx` (`t_usuario_usu_id` ASC) VISIBLE,
  CONSTRAINT `fk_t_asignacion_t_mesa1`
    FOREIGN KEY (`t_mesa_mesa_id`)
    REFERENCES `restaurante`.`t_mesa` (`mesa_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_t_asignacion_t_usuario1`
    FOREIGN KEY (`t_usuario_usu_id`)
    REFERENCES `restaurante`.`t_usuario` (`usu_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `restaurante`.`t_cabeceraPedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurante`.`t_cabeceraPedido` (
  `cp_id` INT NOT NULL,
  `cp_razsocial` VARCHAR(60) NULL,
  `cp_direccion` VARCHAR(45) NULL,
  `cp_identificador` VARCHAR(20) NULL,
  `cp_fecha` DATETIME NULL,
  `cp_tipo` VARCHAR(45) NULL,
  `cp_obs` TEXT NULL,
  `cp_total` DECIMAL NULL,
  `t_tipoMoneda_tm_id` INT NOT NULL,
  `t_asignacion_asig_id` INT NOT NULL,
  PRIMARY KEY (`cp_id`),
  INDEX `fk_t_cabeceraPedido_t_tipoMoneda1_idx` (`t_tipoMoneda_tm_id` ASC) VISIBLE,
  INDEX `fk_t_cabeceraPedido_t_asignacion1_idx` (`t_asignacion_asig_id` ASC) VISIBLE,
  CONSTRAINT `fk_t_cabeceraPedido_t_tipoMoneda1`
    FOREIGN KEY (`t_tipoMoneda_tm_id`)
    REFERENCES `restaurante`.`t_tipoMoneda` (`tm_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_t_cabeceraPedido_t_asignacion1`
    FOREIGN KEY (`t_asignacion_asig_id`)
    REFERENCES `restaurante`.`t_asignacion` (`asig_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `restaurante`.`t_producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurante`.`t_producto` (
  `prod_id` INT NOT NULL,
  `prod_nomb` VARCHAR(45) NULL,
  `prod_precio` DECIMAL(5,2) NULL,
  `prod_disponible` TINYINT NULL,
  PRIMARY KEY (`prod_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `restaurante`.`t_detallePedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurante`.`t_detallePedido` (
  `dp_id` INT NOT NULL,
  `dp_cant` INT NULL,
  `dp_precio` DECIMAL NULL,
  `t_producto_prod_id` INT NOT NULL,
  `t_cabeceraPedido_cp_id` INT NOT NULL,
  PRIMARY KEY (`dp_id`),
  INDEX `fk_t_detallePedido_t_producto_idx` (`t_producto_prod_id` ASC) VISIBLE,
  INDEX `fk_t_detallePedido_t_cabeceraPedido1_idx` (`t_cabeceraPedido_cp_id` ASC) VISIBLE,
  CONSTRAINT `fk_t_detallePedido_t_producto`
    FOREIGN KEY (`t_producto_prod_id`)
    REFERENCES `restaurante`.`t_producto` (`prod_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_t_detallePedido_t_cabeceraPedido1`
    FOREIGN KEY (`t_cabeceraPedido_cp_id`)
    REFERENCES `restaurante`.`t_cabeceraPedido` (`cp_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

    """
