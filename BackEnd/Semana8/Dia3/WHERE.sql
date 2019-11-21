# ELIMINE TODAS LAS TABLAS DE LA BASE DE DATOS 
DROP SCHEMA CODIGO9;
CREATE SCHEMA CODIGO9;
USE CODIGO9;
# CREAR UNA TABLA ALUMNO QUE TENGA SU ALUM_ID(INT), ALUM_NOM(VARCHAR(50))
# ALUM_APE(VARCHAR(50)), ALUM_GRADO(VARCHAR(20)), 
# ALUM_FECNAC(DATETIME) Y UNA TABLA CURSO QUE TENGA CUR_ID(INT), 
# CUR_NOM (VARCHAR(50))
# CUR_DIFICULTAD (VARCHAR(20)) CON UNA RELACION DE MUCHOS A MUCHOS SIENDO SU TABLA
# PUENTE ALUM_CUR, UNA VEZ CREADO INGRESE LE SIGUIENTE SCRIPT
# todos los de quinto llevan fisica I y CTA 
# todos los de cuarto llevan Matematica II y Biologia
# todos los de primero llevan Matematica I y Matematica II

INSERT INTO ALUMNO (ALUM_NOM,ALUM_APE,ALUM_GRADO)VALUES
('Eduardo','Juarez','Quinto',1992-08-01),
('Christopher','Rodriguez','Cuarto',1993-07-10),
('Raul','Pinto','Primero',1996-02-05),
('Cristina','Espinoza','Quinto',1992-10-21),
('Valeria','Acevedo','Cuarto',1993-05-18);
# para la tabla curso ingresar
INSERT INTO CURSO ( CUR_NOM,CUR,DIFICULTAD) VALUES
('Matematica I','Facil'),
('Fisica I','Facil'),
('Matematica II','Intermedio'),
('CTA','Dificil'),
('Biologia','Dificil');