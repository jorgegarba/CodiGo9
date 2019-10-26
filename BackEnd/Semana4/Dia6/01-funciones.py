# para definir una funcion se usa la palabra reservada def

def saludar():
    """Funcion que sirve para saludar"""
    print("Hola, buenos días!")

def saludarConNombre(nombre,edad):
    """Funcion que recibe el nombre y la edad y te saluda con un mensaje personalizado"""
    print(f"Hola {nombre} buenos dias, tienes {edad} años")

# saludar()
# saludarConNombre('Eduardo',26)

def sumar(a,b):
    # Sirve para devolver uno o mas parametros de una funcion, por lo que debe estar almacenado en una o mas variables
    """Funcion que recibe dos numeros y devuelve su sumatoria"""
    return a + b

# resultado = sumar(10,5)
# print(resultado)

def restar(a,b):
    return a-b

# Podemos seleccionar que parametro queremos que tenga cierto valor sin importar su orden
# resutado = restar(b=5,a=9)
# print(resutado)

# la variable *args es una lista dinamica de elementos para recibir un numero indeterminado de variables
def indeterminada (a,b,*args):
    print(f"El valor de a es {a}")
    print("El valor de b es {}".format(b))
    # el args es una tupla
    print(args)
    for elemento in args:
        print(elemento)

# indeterminada(10,20,40,50,80,100,200,"Viernes",True)

# **kwargs : keyword args es una variable para recibir un numero ilimitado de parametros pero usando diccionarios
diccionario = {
    "clave":"valor"
}

def indeterminada_diccionario(**kwargs):
    print(kwargs)
# indeterminada_diccionario(numero=5,nombre="Juan",lista=[1,2,3,4,5])

# se pueden mezclar los dos tipos de variables para que reciban un numero ilimitado de parametros y un numero ilimitado de parametros con nombre de variable
def indeterminada_mix(*args,**kwargs):
    print(args)
    print(kwargs)

# indeterminada_mix(10,20,40,mensaje="Buenos dias",dia="Sabado",pUnit=10,descripcion="Kg de manzana",cantidad=20)

def raiz_cuadrada(numero):
    pass

def funcion():
    """Funcion que retorna 3 valores: 1numero, 1 dia de la semana y un arreglo con las estaciones"""
    return 26, "Sabado", ["Verano","Otoño","Primavera","Invierno"]

nro_dia, dia, estaciones = funcion()
print(nro_dia,dia,estaciones)