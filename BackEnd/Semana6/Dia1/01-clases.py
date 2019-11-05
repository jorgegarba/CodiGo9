# una clase es un conjunto de metodos y atributos que sirven para reutilizar codigo
class Silla:
    # atributos de una clase
    color= "Blanco"
    nro_patas = 4
    precio = 15.00

# un objeto es una variable que asume todas las propiedades y atributos de una clase
silla1 = Silla()
print(silla1.color)
silla1.color= "Verde"
print(silla1.color)