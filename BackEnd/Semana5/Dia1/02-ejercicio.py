# Usando el modulo re nosotros debemos ingresar una cadena de texto por ejemplo
# hola mundo
# y como resultado debe dar la frase capitalizada, resultado
# Hola Mundo
# Osea de cada palabra, la primera letra en mayuscula.
# No vale usar CamelCase
import re

texto = input("Ingrese texto a convertir")
arreglo = re.split(" ",texto)
texto_capitalizado= ""
for palabra in arreglo:
    texto_capitalizado += palabra.capitalize()
    texto_capitalizado+= " "
print(texto_capitalizado)

texto_capitalizado=""
for palabra in arreglo:
    for letra in range(len(palabra)):
        if(letra==0):
            if(ord(palabra[0])>=97 and ord(palabra[0])<=122 or ord(palabra[0])==241):
                ascii_mayus = int(ord(palabra[0]))-32
                texto_capitalizado += chr(ascii_mayus)
            else:
                texto_capitalizado += palabra[letra]
        else:
            texto_capitalizado += palabra[letra]
    texto_capitalizado += " "
print("Segunda forma")
print(texto_capitalizado)