# JSON =  JavaScript Object Notation
# es una forma de almacenar e intercambiar datos que estan en formato texto
import json

producto={
    "nombre":"shampoo",
    "precio":20.00,
    "cantidad":100
}

# convertir un diccionario a un json
producto_json = json.dumps(producto)
print(type(producto_json))
print(producto_json)
print(producto_json[2])

# convertir de un json a un diccionario
producto_dic = json.loads(producto_json)
print(type(producto_dic))
print(producto_dic["nombre"])