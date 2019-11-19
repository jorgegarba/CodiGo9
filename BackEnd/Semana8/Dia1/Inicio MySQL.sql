-- ESTO ES UN COMENTARIO
/* 
ESTO ES UN BLOQUE DE COMENTARIOS
*/
# OTRO TIPO DE COMENTARIO

# NUMEROS
# int: que aceptan valores entre -2147483648 a 2147483647
# tinyint: -128 a 127 (tambien se utiliza para booleanos donde 1 es TRUE y 0 es 
# FALSE)
# smallint: -32768 a 32767
# float(m,d): m=> la cantidad de numeros que vamos a tener y d=> su cantidad de 
# decimales
# float(3,2) => 9.99

# TIEMPO Y FECHA
# date: su formato es YYYY-MM-DD desde el 1000-01-01 hasta el 9999-12-31
# datetime: su formato es YYYY-MM-DD HH:MM:SS 
# timestamp: que no usa guiones ni dos puntos por lo que su formato seria YYYYMMDDHHMMSS
# time: solamente guarda HH:MM:SS

# STRING
# char(20): un atributo que admite todo tipo de caracteres y entre parentesis se 
# pone su longitud, si no se pone nada, toma el valor por defecto de 1 hasta 65535
# varchar(200): este atributo es DINAMICO, hace que solamente ocupe el espacio de 
# memoria que necesita, nosotros le ponemos el limite de longitud entre parentesis
# pero si el texto ingresado tiene una menor longitud, solamente va a necesitar 
# eso para almacenarse. puede almacenar hasta 65535 caracteres
# text: es el tipo de atributo con el numero de caracteres que mas puede almacenar
# se usa generalmente para guardar contraseñas encriptadas

# Para nosotros crear una tabla necesitamos saber:
# 1 El nombre de la tabla (sin espacios y se recomienda que en vez del espacio usar
# un subguion
# 2 El nombre de los campos y tipos de datos
# 3 Sus relaciones
# EJEMPLO
# CREATE TABLE nombre_tabla (nombre_de_la_columna tipo_de_dato);
# aparte de definir el nombre y tipo se pueden añadir opciones extras como por ej:
# NOT NULL => que siempre le tengamos que ingresar un valor
# AUTO_INCREMENT => esto va a hacer que sea auto incrementable, se usa mayormente 
# para las primary keys para no interactuar con ellas al momento de insertar valores
# UNIQUE => se usa para que sea unica e irrepetible, osea nunca va a poder existir
# otro valor igual en esa columna, se usa mayormente en las PK
# FORMAS DE DEFINIR UNA PRIMARY KEY:
# 1 nombre_columna int PRIMARY KEY => ponerla al lado de la definicion de su tipo
# de dato
# 2 al final de declarar todas las columnas poner "PRIMARY KEY (nombre_columna)"
# FORMA DE DEFINIR UNA FOREIGN KEY:
# al final de declarar todas las columnas poner 
# FOREIGN KEY (nombre_columna) REFERENCES NOMBRE_TABLA_DONDE_HEREDA(nombre_de_la_columna_de_su_pk)

# Para crear una tabla primero tenemos que decir donde va a estar esa tabla o en 
# que base de datos va a existir, en MySQL las bases de datos son schema y para
# crear un nuevo schema se usar lo siguiente
#create schema Codigo9;
#create database Codigo9;
# altenar en el uso de bases de datos se usa
use Codigo9;

# para ejecutar una parte del SCRIPT se selecciona el guion y se 
# presiona ctrl+enter o hacemos click en el rasho con un palito

create table alumno(
id_alumno int not null auto_increment primary key,
alum_nom varchar(50),
alum_ape varchar(50),
alum_email varchar(35)
);

create table curso(
id_curso int not null primary key auto_increment,
cur_nomb varchar(35),
id_alumno int,
foreign key (id_alumno) references alumno(id_alumno)
);

# Insertar una nueva tupla o row a una tabla es de la siguiente forma:
insert into alumno (alum_nom, alum_ape, alum_email) values 
("Eduardo","De Rivero", "ederiveroman@gmail.com"),
("Roxana","Vilchez","rosita666@hotmail.com");
insert into alumno values (3,"Jorge Luis","Rodriguez","jorgerb@gmail.com");

insert into curso (cur_nomb, id_alumno) values
("Comunicacion",1),
("Matematica",2),
("Algebra",3),
("CTA",3);
# O TODO ESTA BIEN O NADA SE INGRESA

# PARA ELIMINAR TODA LA TABLA SE USA
# drop table alumno;
# NOTA: NO PODEMOS ELIMINAR UNA TABLA QUE TENGA UNA RELACION DE HERENCIA, PRIMERO
# SE ELIMINAN A LOS HIJOS Y LUEGO A LOS PADRES
# drop table curso;
# drop table alumno;

# Para visualizar el contenido de una tabla se usa la siguiente secuencia
# SELECT NOMBRE_DEL(OS)_CAMPO(S) FROM NOMBRE_TABLA
# SI QUIERO SELECCIONAR TODOS LOS CAMPOS DE UNA TABLA USO EL *
# SELECT * FROM NOMBRE_TABLA
select * from curso;
# MOSTRAR TODAS LAS TABLAS DE MI BASE DE DATOS
show tables;
# SI QUEREMOS USAR UN FILTRO DE CONDICION PARA NUESTRO SELECT USAMOS LA CLAUSULA
# WHERE
select * from curso where cur_nomb = 'Comunicacion';
# PARA AGREGAR UN ALIAS A UNA COLUMNA por motivos de seguridad o simple estilo
# se usa la palabra reserva AS y entre comillas simples si contiene un espacio
select cur_nomb AS 'Nombre del Curso' from curso where id_alumno = 3;
# Para eliminar EL CONTENIDO DE la tabla se usa
delete from curso where id_alumno=3;











# Tengo una base de datos llamada Tecsup con las tablas pabellon y aulas, un 
# pabellon puede tener una o muchas aulas y tengo lo siguiente
# dos pabellones, en el pabellon A tengo 3 aulas y en el pabellon b tengo 2 aulas
# en cada aula tengo: su id, nombre y disponibilidad y en el pabellon tengo su
# id nombre y color
# en la tabla pabellon tengo lo siguiente
# 1 'Pabellon A' 'rojo'
# 2 'Pabellon B' 'blanco'
# en la tabla aula tengo lo siguiente
# 1 'A310' 0 1(fk de pabellon)
# 2 'A212' 1 1
# 3 'A309' 1 1
# 4 'B104' 0 2
# 5 'B308' 1 2
# Se desea saber cuales son las aulas disponibles y, cuales son las aulas pertene-
#cientes al pabellon A(fk=1)