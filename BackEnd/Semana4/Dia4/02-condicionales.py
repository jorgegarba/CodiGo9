# condicional if else elif
a = 3
b = 3
# si la condicion es Verdadero, entra al if, si es Falso entra al else y si quieremos otra condicion dentro de ese conjunto usamos elif PERO antes del else, y esto se da porque en python no hay SWITCH-CASE
# if(a>b):
#     print("a es mayor que b")
# elif (a==b):
#     print("a es igual que b")
# else:
#     print("b es mayor que a")

# Ingresar un numero y que me diga si es positivo, negativo o cero
# numero = int(input("Ingrese un numero: "))
# if(numero>0):
#     print("El numero es positivo")
# elif(numero==0):
#     print("El numero es cero")
# else:
#     print("El numero es negativo")

# Ingresar un numero y que diga si es par o impar
# numero2 = int(input("Ingrese el numero: "))
# if(numero2%2==0):
#     print("El numero es par")
# else:
#     print("El numero es impar")

# for => es usado para iterar sobre una secuencia de elementos
texto="Es jueves de patas"
# for letra in texto:
#     print(letra, end=",")

# for(let i=0; i<10;i++){}
# range => es un metodo que como primer parametro le ponemos el inicio, como segundo parametro el fin, y como tercer parametro en cuantas unidades va a incrementar o decrementar. PERO si no solo se le pone un valor es el limite y por defecto inicia en 0 e incrementa en 1 unidad
# for i in range(10):
#     print(i)

# Se desea saber de los numero del 10 al 25 cuantos son pares y cuantos son impares
pares = 0
impares = 0
# for i in range(10,26):
#     if(i%2==0):
#         print(f"{i} es par")
#         pares += 1
#     else:
#         print("{} es impar".format(i))
#         impares += 1
# print(f"Hay {pares} pares")
# print(f"Hay {impares} impares")

# break => para parar el ciclo GENERAL, ahi muere
# for numero in range(0,100):
#     if(numero==45):
#         break
#     print(numero)

# continue => para parar SOLO la iteraccion actual
# for numero in range(0,20):
#     if(numero==10):
#         continue
#     print(numero)

# for doble
# for numero1 in range(4):
#     for numero2 in range(5):
#         print(numero1,numero2)

# while => un bucle que se va a realizar mientras la condicion sea Verdadera
valor = 1
fin = 10
while(valor<fin):
    print(valor)
    valor +=1 # valor++ ó valor=valor+1

# pass => no hace nada pero como en Python la unica forma de usar funciones, condicionales, entre otros es por medio de la identacion, entonces por ende por default cada vez que usemos alguna condicional se pondra pass
for i in range(0,100):
    pass
x=20
