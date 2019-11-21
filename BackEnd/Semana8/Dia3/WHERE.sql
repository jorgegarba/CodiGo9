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
create table if not exists alumnos(
	alum_id int not null auto_increment primary key,
    alum_nom varchar(40),
    alum_ape varchar(40),
    alum_grado varchar(20),
    alum_fecnac datetime
);
create table if not exists cursos(
	cur_id int not null auto_increment primary key,
    cur_nom varchar(40),
    cur_dificultad varchar(30)
);
create table if not exists ALUM_CUR(
	ALUM_CUR_id int not null auto_increment primary key,
    alum_id int,
    cur_id int,
    foreign key (alum_id) references alumnos(alum_id),
    foreign key (cur_id) references cursos(cur_id)
);

INSERT INTO ALUMNOs (ALUM_NOM,ALUM_APE,ALUM_GRADO, ALUM_FECNAC)VALUES
('Eduardo','Juarez','Quinto','1992-08-01'),
('Christopher','Rodriguez','Cuarto','1993-07-10'),
('Raul','Pinto','Primero','1996-02-05'),
('Cristina','Espinoza','Quinto','1992-10-21'),
('Valeria','Acevedo','Cuarto','1993-05-18');
# para la tabla curso ingresar
INSERT INTO CURSOs ( CUR_NOM,CUR_DIFICULTAD) VALUES
('Matematica I','Facil'),
('Fisica I','Facil'),
('Matematica II','Intermedio'),
('CTA','Dificil'),
('Biologia','Dificil');
insert into alum_cur (alum_id, cur_id) values 
(1,2),(4,2), # todos los de quinto llevan Fisica I
(1,4),(4,4), # todos los de quinto llevan CTA
(2,3),(5,3), # todos los de cuarto llevan Matematica II
(2,5),(5,5), # todos los de cuarto llevan Biologia
(3,1),(3,3); # todos los de primero llevan Matematica I y Matematica II


SELECT * FROM ALUMNOS WHERE alum_fecnac like '%-08-%' OR alum_fecnac like '%-10-%';
# EL OR SE USA PARA QUE SE TIENE CUMPLIR UNA U OTRA DE LAS CONDICIONES
# EL AND SE USA PARA QUE SE TIENEN QUE CUMPLIR OBLIGATORIAMENTE LAS CONDICIONES
# EL LIKE SE USA PARA UNA COINCIDENCIA SUPERFICIAL, OSEA QUE NO TIENE QUE HACE MATCH
# AL 100%, Y SE USA LOS % PARA INDICAR QUE PUEDE ESTAR EN EL MEDIO DE UN TEXTO, FECHA, ETC.
# EL WHERE SIEMPRE VA DESPUES DE DEFINIR LAS TABLAS (DESPUES DEL FROM Y DE LOS JOINS

# DOCUMENTACION DE FUNCIONES DE FECHA EN MYSQL
# https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html
# FUNCIONES DE STRING
# https://dev.mysql.com/doc/refman/8.0/en/string-functions.html

# SELECCIONAR TODOS LOS ALUMNOS QUE LLEVEN MATEMATICAS Y QUE SU APELLIDO SEA PINTO
# alum_nom	alum_ape	cur_nom
select alumnos.alum_nom, alumnos.alum_ape, cursos.cur_nom from alum_cur as puente 
inner join alumnos on puente.alum_id=alumnos.alum_id
inner join cursos on puente.cur_id=cursos.cur_id
where cur_nom like 'matematica%' and alum_ape like 'Pinto';

# SELECT [CAMPOS]
# FROM [TABLAS] {JOINS}
# WHERE [CLAUSULAS]

