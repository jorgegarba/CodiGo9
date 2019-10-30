# secuencia de caracteres que forma una busqueda de un patron, sirve para verificar una cadena de texto para ver si contiene un patron especifico
import re # regular expression
texto = "Hola, mi nombre es Juancito"
print(re.search("nombre",texto))
if(re.search("nombre",texto)):
    print("Se encontro la palabra")
else:
    print("No se encontro la palabra a buscar")

# Buscar la palabra pero al final de la oracion
# $
print(re.search("Juancito$",texto))

# Buscar la palabra pero al comienzo de una oracion
# ^
print(re.search("^Hola",texto))

# findall => buscar todas las coincidencias que hay en un texto
# La triple doble comilla se usa para definir un string pero en varias lineas, y se respeta su salto de linea
texto2= """
El auto de Eduardo es azul,
El auto de Jorge es cafe,
El auto de Daniel es negro"""
# .* => no importa lo que hay entre esas dos palabras, solamente queremos encontrar si estan en ese orden
print(re.findall("auto.*azul",texto2))
print(re.findall("auto.*es",texto2))

texto3 = "Es martes y hace frio"
# sirve para separar lo que esta contenido en la cadena de texto segun el identificador
print(re.split(" ",texto3))

# sirve para reemplazar la palabra a buscar por una nueva palabra como segundo parametro
print(re.sub("martes","viernes",texto3))

# Como sacar el codigo ASCII
print(ord("a"))
# como convertir de ASCII al caracter
print(chr(97))