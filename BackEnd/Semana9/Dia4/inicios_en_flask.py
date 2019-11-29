# pip install flask
from flask import Flask

# __name__ nos indica si nuestro proyecto donde estamos ejecutando se esta ejecutando en el hilo principal
app = Flask(__name__)
print(__name__)

# para nosotros declara una ruta en nuestra API necesitamos usar un decorador que simplementes en una forma de llamar a un metodo de la clase y se le pone como parametro la ruta que va a llamarse, despues de usar el decorador se pone una funcion que es la que va definir el funcionamiento de la ruta
@app.route('/')
def inicio():
    # SIEMPRE tenemos que retornar algo porque sino el cliente se va a quedar esperando una respuesta
    return 'Mi primera API vive!'

if __name__ == '__main__':
    # debug => sirve para que cuando nosotros hagamos algun cambio y guardemos se reinicie el servidor automaticamente, x defecto el debug=False
    # port => es el puerto por el cual la API va a escuchar las llamadas que le hagamos desde el cliente, x defecto el port=5000
    app.run(port=5001,debug=True)