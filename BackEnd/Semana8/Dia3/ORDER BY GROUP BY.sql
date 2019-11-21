USE CODIGO9;
# ORDER BY Y GROUP BY
# EL ORDER BY ORDENA EN BASE A UNA O VARIAS COLUMNAS SEGUN SU TIPO (ASC, DESC)
SELECT * FROM ALUMNOS 
ORDER BY alum_grado ASC, alum_id desc;

# GROUP BY => SE USA CUANDO NOSOTROS USEMOS UNA DE LAS FUNCIONES DE SQL COMO SUM
# AGREGAR UN ALUMNO CON EL MISMO NOMBRE
select sum(alum_id), alum_nom from alumnos
group by alum_nom;
# SQLSERVER=> TIENES QUE USAR UNA CLAUSULA GROUP BY O HAVING BY PARA USAR LAS FUNCIONES SQL






# crear una base de datos de una playa de estacionamiento, en el cual
# se guarden los vehiculos que ingresaron y tener un registro de vehiculos, una 
# tabla vehiculos debe tener su id, placa, marca, año, modelo, color, tambien la
# playa de estacionamiento tiene 3 lugares, uno en la calle san francisco 204, otro en
# san juan de dios 132 y otro en la av eeuu 505 por lo que se debe tener una tabla
# playa con su id, direccion, cantidad. La base de datos se debe llamar Playa_AQP

insert into vehiculos (placa,marca,modelo,color,anio) values 
('V3A527','VOLKSWAGEN','TIGUAN','BLANCO','2018'),
('ABC345','FORD','FIESTA','AMARILLO','2015'),
('T4F567','RENAULT','KOLEOS','NEGRO','2018'),
('AVF465','DAEWOO','TICO','AZUL','2016'),
('GNB867','HIUNDAY','SANTA FE','NEGRO','2018');

INSERT INTO PLAYA (DIRECCION,CANTIDAD) VALUES 
('CALLE SAN FRANCISCO 204',30),
('SAN JUAN DE DIOS 132',25),
('AV EEUU 505',10);

INSERT INTO REGISTRO (ID_VEHICULO,ID_PLAYA,FECHA_INGRESO,FECHA_SALIDA) VALUES 
(1,1,'2019-11-05 10:20','2019-11-05 11:33'),
(1,2,'2019-11-02 17:20','2019-11-02 19:33'),
(2,1,'2019-11-04 10:20','2019-11-04 11:33'),
(3,1,'2019-11-04 10:20','2019-11-04 11:33'),
(3,3,'2019-11-05 10:05','2019-11-05 11:33'),
(4,3,'2019-11-01 10:25','2019-11-01 11:33'),
(4,3,'2019-11-01 19:34','2019-11-01 20:45'),
(5,1,'2019-10-05 10:20','2019-10-05 11:33'),
(5,2,'2019-10-05 10:20','2019-10-05 11:33'),
(1,1,'2019-10-05 10:20','2019-10-05 11:33');



# EL CLIENTE DEBE SABER LA CANTIDAD DE VEHICULOS POR MES
