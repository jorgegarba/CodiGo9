# Cree una funcion que ingrese el nombre y la edad de la persona y me diga si tiene que votar, si tiene mas de 65 años puede votar pero no es obligatorio o si no tiene la edad para votar
def votar(nombre, edad):
    if edad>= 65:
        print(f"{nombre} puedes votar pero no es obligatorio")
    elif (edad>=18 and edad< 65):
        print("{} tienes que votar obligatoriamente".format(nombre))
    else:
        print(nombre,"No tienes edad para votar")

# nombre = input("Ingresa tu nombre: ")
# edad = int(input("Ingresa tu edad: "))
# votar(nombre,edad)

# Escibir una funcion que le pida la usuario ingresar la altura y el ancho de un rectangulo y lo dibuje en consola usando *. Ejemplo:
# altura : 4
# ancho: 5
# Resultado:
# *****
# *****
# *****
# *****
def dibujar_rectangulo(ancho,alto):
    # METODO 1
    print("METODO 1")
    for numero in range(alto):
        for numero2 in range(ancho):
            print('*',end="")
        print('')
    print("METODO 2")
    # METODO 2
    resultado = ''
    for numero in range(ancho):
        resultado += '*'
    for numero in range(alto):
        print(resultado)
    # METODO 3
    print("Metodo 3")
    resultado3 = '*'
    resultado3 = resultado3*ancho
    for numero in range(alto):
        print(resultado3)
    # METODO 4
    print("METODO 4")
    resultado4 = '*'
    resultado4 = resultado4*ancho
    resultado4 = resultado4+'\n'
    resultado4 = resultado4 * alto
    print(resultado4)

# ancho = int(input("Ingrese el ancho: "))
# alto = int(input("Ingrese el alto: "))
# dibujar_rectangulo(ancho,alto)

# Escribir una funcion que reciba la altura de un triangulo y lo dibuje invertido
# Ejemplo
# Altura: 6
# Resultado
# ******
# *****
# ****
# ***
# **
# *

def triangulo_invertido (altura):
    # METODO 1
    for fila in range(altura,0,-1):
        print("*"*fila)
    # METODO 2
    print("Metodo 2")
    for y in range(altura):
        for i in range(altura-y):
            print('*',end="")
        print('')
    # METODO 3
    print("Metodo 3")
    for numero in range(altura):
        resultado = '*'*(altura-numero)
        print(resultado)
    # METODO 4
    print("Metodo 4")
    h= altura
    for i in range(altura):
        nivel=""
        for i in range(h):
            nivel += "*"
        print(nivel)
        h -= 1

triangulo_invertido(6)




# Escribir una funcion que reciba como parametros el lado de un octagono y lo dibuje
# Ejemplo
# Lados: 4
#    ****
#   ******
#  ********
# **********
# **********
# **********
# **********
#  ********
#   ******
#    ****

# Una vez resuelto todos los ejercicio , crear un menu de seleccion que permita escoger que ejercicio queremos ejecutar hasta que escribamos la palabra "salir" ahi recien termina de pedir que ejercicio queramos ejecutar
# NOTA: EN PYTHON NO EXISTE EL CONDICIONAL SWITCH, USE IF ELIF ELSE