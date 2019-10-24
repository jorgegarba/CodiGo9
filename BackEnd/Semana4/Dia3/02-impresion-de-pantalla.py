nombre = "Ramiro"
print(nombre)
# Texto con variables, MODO I
print("Mi nombre es: ",nombre)
# MODO II
edad = 24
print("Mi nombre es: {} y tengo {} años".format(nombre,edad))
# MODO III modificando el orden de variables a imprimir
print("Tengo {1} años y mi nombre es {0}".format(nombre,edad))
# MODO IV: concatenando texto y variables dentro de las comillas
print(f"Tengo {edad} años y me llamo {nombre}")
# MODO V: Restrigiendo la cantidad de decimales de una variable
pi = 3.1515294839394583839
print(f"El valor de pi es: {pi:1.3f}")
# MOVO VI: Concatenando variables con texto
print("Mi nombre es: "+format(nombre)+" y tengo: "+format(edad))