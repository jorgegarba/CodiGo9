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
resutado = restar(b=5,a=9)
print(resutado)

