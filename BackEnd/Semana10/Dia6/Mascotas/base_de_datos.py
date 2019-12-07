from app import app
from flask_mysqldb import MySQL

app.config['MYSQL_HOST']='localhost'
app.config['MYSQL_USER']='root'
app.config['MYSQL_PASSWORD']='root'
app.config['MYSQL_DB']='mascotas'

mysql = MySQL(app)

@app.before_first_request
def crear_bd():
    cur = mysql.connection.cursor()
    cur.execute("""
    CREATE TABLE IF NOT EXISTS t_propietario(
        prop_id int primary key not null auto_increment,
        prop_nombre varchar(50),
        prop_ape varchar(50),
        prop_dir varchar(100),
        prop_fono varchar(20),
        prop_dni varchar(10),
        prop_email varchar(50)
    );
    CREATE TABLE IF NOT EXISTS t_mascota(
        mas_id int primary key not null auto_increment,
        mas_nombre varchar(30),
        mas_raza varchar(30),
        mas_tipo varchar(20),
        mas_fecnac date,
        mas_sexo varchar(20),
        prop_id int,
        foreign key (prop_id) references t_propietario(prop_id)
    );
    CREATE TABLE IF NOT EXISTS t_color(
        col_id int primary key not null auto_increment,
        col_nombre varchar(30),
        col_hexadecil varchar(7),
        col_rgb varchar(14)
    );
    CREATE TABLE IF NOT EXISTS t_mascota_color(
        mas_col_id int primary key not null auto_increment,
        mas_id int,
        col_id int,
        foreign key (mas_id) references t_mascota(mas_id),
        foreign key (col_id) references t_color(col_id)
    );
    """)