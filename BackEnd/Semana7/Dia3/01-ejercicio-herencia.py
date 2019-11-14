# Se tiene una clase Restaurante que tiene su razon social, direccion, ruc y una clase padre llamada Categoria que tiene su nombre de categoria, al momento de crear un restaurante debe tener una categoria 
class Categoria:
    def __init__(self,nombre):
        self.nombre = nombre
    def __str__(self):
        return f"Su categoria es: {self.nombre}"

class Restaurante(Categoria):
    def __init__(self, razon_social, direccion, ruc, nombre_categoria):
        self.razon_social = razon_social
        self.direccion = direccion
        self.ruc = ruc
        super().__init__(nombre_categoria)
    def __str__(self):
        return super().__str__()+ f"\nSu Razon social es: {self.razon_social}\nSu Direccion es: {self.direccion}\nSu Ruc es: {self.ruc}"

objRestaurante = Restaurante("La Quequita","Av Arancota s/n", 4568249783,"Chicharroneria")
print(objRestaurante)