from flask import Flask, request, jsonify
# request => para capturar lo mandado por el cliente por su cuerpo (body)
# jsonify => sirve para convertir un diccionario en un json para que se puedan entender la API con el cliente

app = Flask(__name__)
supermercados = [
    {
        'nombre': 'Plaza Vea',
        'productos':[
            {
                'nombre':'Cafe',
                'precio':24.00
            }
        ]
    }
]
# 127.0.0.1:5000
@app.route('/')
def inicio():
    return 'La API de supermercados funciona exitosamente!'
# GET => para hacer una consulta y trae datos
# POST => para mandar informacion al servidor
# PUT => para actualizar informacion de uno o varios datos
# DELETE => para eliminar informacion
# http:127.0.0.1:5000/tiendas/crear
# si nosotros no definimos que METODO vamos a usar, por defecto es GET, podemos definir uno o mas metodos pero no se usa mucho
@app.route('/tiendas/crear', methods=['POST'])
def crear_supermercado():
    # get_json transforma automaticamente el json en un diccionario para que py lo pueda entender
    data = request.get_json()
    print(data)
    print(data['nombre'])
    nuevo_supermercado = {
        'nombre':data['nombre'],
        'productos':[]
    }
    print(nuevo_supermercado)
    supermercados.append(nuevo_supermercado)
    # jsonify => convierte un diccionario en un json para que pueda ser leido por el cliente
    return jsonify(supermercados)

# CREAR UNA RUTA PARA QUE ME DEVUELVA TODOS LOS SUPERMERCADOS
@app.route('/supermercados/traertodos', methods=['GET'])
def traersupers():
    return jsonify({'supermercados': supermercados})

# CRUD => Create, Read, Update, Delete
# Para los metodos GET no se recomienda mandar data por el body, siempre por los parametros
@app.route('/supermecadoPorNombre/<string:nombresuper>',methods=['GET'])
def traersuperpornombre(nombresuper):
    print(nombresuper)
    # buscar por el nombre y que me devuelva solo ese nombre
    # PISTA: Usar for
    return nombresuper


# EL MAIN SIEMPRE VA AL FINAL
if __name__=='__main__':
    app.run(debug=True)
