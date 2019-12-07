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
    CREATE TABLE IF NOT EXIST t_mascota();
    CREATE TABLE IF NOT EXIST t_color();
    CREATE TABLE IF NOT EXIST t_mascota_color();
    CREATE TABLE IF NOT EXIST t_propietario();
    """)