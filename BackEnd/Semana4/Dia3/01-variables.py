# Este es un comentario
# Para definir variables numericas
numero = 1
numerodecimal = 10.5

# Para definir variables de texto
texto = 'Soy un texto'
texto2 = "Yo tambien soy un texto"

# Para ver el tipo de las variables
print(type(texto2))

# Para definir una variable tiene que
# comenzar con una letra o con un simbolo _
# NUNCA PUEDE COMENZAR CON NUMEROS u OTROS
# CARACTERES ESPECIALES

# Hay dos tipos de variables, las MUTABLES y
# las INMUTABLES
# MUTABLES => Son las que se pueden modificar
# y todas sus referencias van a sufrir los cambios
# (Listas, diccionarios, tuplas)
# INMUTABLES => Son las que no se van a modificar
# a pesar de tener su misma referencia
# (Numeros, STR, Cadenas, etc.)

# Para eliminar una variable se usa el prefijo del
# sirve para liberar espacio de memoria
del numero

# Hay palabras reservadas que no pueden ser utilizadas
# como nombres de variables
# lambda = 5

variable1 = 10
variable2 = 8.5
variable3 = True
variable4 = "Miercoles"
variable5 = [10, "Eduardo", 9.5]
print(type(variable1))
print(type(variable2))
print(type(variable3))
print(type(variable4))
print(type(variable5))

# Definir varias variables en una sola linea de codigo
# en este caso a=10 y b =20
a, b = 10, 20
x1, x2 = (10, 50)

# Objetos inmutables
# cada objeto (o variable) ocupa un espacio de memoria
# por separado
a = 15
b = a
a = 10
print(b, a)

# Objetos mutables
# En el caso que si su valor interno cambia, todos
# apuntan al mismo espacio de memoria
a = [10, 11]
# Para ver la posicion del memoria en la cual esta alojada nuestra variable
print(hex(id(a))) 
b = a
print(a,b)
a[0]=20
print(a,b)
b[1]=30
print(a,b)
