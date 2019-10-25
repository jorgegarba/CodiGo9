# listas
colores = ["rojo", "azul", "verde", "violeta", "fucsia"]
# print(colores)
# imprimir el ultimo item de la lista
# print(colores[-1])
# imprimir desde la posicion 0 hasta la <2
# print(colores[0:2])
# imprimir desde la posicion 3 hasta el final
# print(colores[3:])

# Todas las formas de impresion NO DE EDICION de las listas tambien sirven para los str
texto = "Hola Amigos"
# print(texto[-1])

# Metodo para agregar un nuevo item a las listas
colores.append("morado")
# print(colores)

# Metodo para quitar o eliminar un item de las listas
colores.remove("azul")
# print(colores)

# Metodo para limpiar toda la lista, eliminar todos los items
colores.clear()
# print(colores)

# Tuplas => coleccion de elementos ordenada QUE NO SE PUEDE MODIFICAR, es inalterable y sirve para usar elementos que nunca se van a modificar en nuestro programa
tupla_datos = (18, 30, 3.14,18,"Jorge",True)
# Para ver la longitud de nuestra coleccion
# print(len(tupla_datos))

# Para ver cuantos valores repetidos tenemos
# print(tupla_datos.count(18))
# print(type(tupla_datos))

# Conjuntos => Coleccion de elementos DESORDENADA, osea, no tiene indice para acceder a sus elementos
temporadas = {"otoño","invierno","verano","primavera"}
# for temporada in temporadas:
    # print(temporada)
temporadas.add("otra temporada")
# print(temporadas)

# diccionario => coleccion de elementos que estan INDEXADOS, no estan ordenados y se puede modificar sus valores. Estan conformados por CLAVE y VALOR
dia_semana ={
    "lunes":"aburrido",
    "martes":"mas aburrido",
    "miercoles":"entretenido",
    "jueves":"casi viernes",
    "viernes":"fin de semana",
    "sabado":"diversion",
    "domingo":"aburrimiento"
}
# print(dia_semana)
# Para ver el valor de una clave en especifico
# print(dia_semana["viernes"])
# Para ver todas sus llaves
# print(dia_semana.keys())
# Para ver todos sus valores
# print(dia_semana.values())
# Agregar una coleccion con su llave y su valor
dia_semana["otro_dia"]="No hay"
# print(dia_semana)
print(dia_semana.items())
for clave, valor in dia_semana.items():
    print(f"Su clave es {clave} y su valor es {valor}")
