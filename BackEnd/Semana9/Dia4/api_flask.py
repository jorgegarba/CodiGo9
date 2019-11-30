from flask import Flask, request, jsonify
# request => para capturar lo mandado por el cliente por su cuerpo (body)
# jsonify => sirve para convertir un diccionario en un json para que se puedan entender la API con el cliente

app = Flask(__name__)
supermercados = [
    {
        'nombre': 'Super',
        'productos': [
            {
                'nombre': 'Leche Gloria',
                'precio': 4.40
            },
            {
                'nombre': 'Ricocan',
                'precio': 7.40
            },
            {
                'nombre': 'Sapolio',
                'precio': 3.40
            },
            {
                'nombre': 'Pollo a la brasa',
                'precio': 19.90
            }
        ]
    },
    {
        'nombre': 'Metro',
        'productos': [
            {
                'nombre': 'Leche Gloria',
                'precio': 4.20
            },
            {
                'nombre': 'Leche de Almendras',
                'precio': 14.80
            }
        ]
    },
    {
        'nombre': 'Franco',
        'productos': [
            {
                'nombre': 'Negrito',
                'precio': 1.20
            },
            {
                'nombre': 'Arroz Tacuari',
                'precio': 2.30
            },
            {
                'nombre': 'Inca Cola',
                'precio': 5.20
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
# EL ENDPOINT ES: http://127.0.0.1:5000
# localhost = 127.0.0.1
# ENCODIFICACION URL : https://www.w3schools.com/tags/ref_urlencode.asp
@app.route('/supermecadoPorNombre/<string:nombresuper>',methods=['GET'])
def traersuperpornombre(nombresuper):
    print(nombresuper)
    # buscar por el nombre y que me devuelva solo ese nombre
    # PISTA: Usar for
    for supermercado in supermercados:
        if supermercado['nombre']==nombresuper:
            return jsonify(supermercado)
        print(supermercado['nombre'])
    return 'No existe ese supermercado'

# AGREGAR UN PRODUCTO A UN SUPERMERCADO SIEMPRE Y CUANDO EXISTA EL SUPERMERCADO
@app.route('/supermercado/<string:nombresuper>/agregarproducto',
methods=['POST'])
def agregar_producto(nombresuper):
    for supermercado in supermercados:
        if supermercado['nombre']==nombresuper:
            # request.get_json sirve para recoger toda la data enviada por el cuerpo (body)
            data = request.get_json()
            nuevo_producto = {
                "nombre": data['nombre'],
                "precio": data['precio']
            }
            supermercado['productos'].append(nuevo_producto)
            return jsonify(supermercado), 201
    return jsonify(
        {
            'message':'Supermarket not found'
        }
    ),418

@app.route('/supermercado/<string:nombre>/productos', methods=['GET'])
def traer_todos_los_productos_de_un_supermercado(nombre):
    # funcion que traiga todos los productos de un supermercado
    for supermercado in supermercados:
        if supermercado['nombre']==nombre:
            return jsonify(
                {
                    'Productos': supermercado['productos']
                }
            )
    return jsonify({
            'message':'Supermarket not found'
        }
    ),418

# EL MAIN SIEMPRE VA AL FINAL
if __name__=='__main__':
    app.run(debug=True)
