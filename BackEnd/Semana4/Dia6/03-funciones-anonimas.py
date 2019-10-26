# en python a las funciones anonimas se les pone el prefijo lambda y son funciones de una sola linea de ejecucion.

def sumar(a,b):
    return a+b

resultado = lambda a,b: a+b
print(resultado(20,10))