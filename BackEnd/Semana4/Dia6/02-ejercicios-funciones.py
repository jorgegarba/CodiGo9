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

ancho = int(input("Ingrese el ancho: "))
alto = int(input("Ingrese el alto: "))
dibujar_rectangulo(ancho,alto)

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
