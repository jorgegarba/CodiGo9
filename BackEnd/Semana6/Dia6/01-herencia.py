class Vehiculos():
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo
        self.andando = False
        self.acelera = False
        self.frena = False
    def arrancar(self):
        self.andando = True
    def acelerar(self):
        self.acelera = True
    def frenar(self):
        self.frena = True
    def __str__(self):
        """Funcion que sobreescribimos para cuando el objeto sea llamado a mostrarse que viene por defecto con su tipo de objeto y su ubicacion de memoria"""
        return f"Marca: {self.marca}\nModelo: {self.modelo}\nAndando: {self.andando} \nAcelerando: {self.acelera}\nFrenando:{self.frena}"
class Moto(Vehiculos):
    # La herencia se usa para usar los atributos y metodos del padre
    hacer_caballito=""
    def __init__(self,marca,modelo,hacer_caballitos):
        # Con el metodo super yo hago un llamado a los datos de mi padre como por ejemplo: su constructor
        self.hacer_caballito=hacer_caballitos
        super().__init__(marca,modelo)
    def caballito(self):
        self.hacer_caballito = "Estoy haciendo caballito"
    # Sobreescribir el metodo __str__
    def __str__(self):
        return super().__str__()+f"\nCaballito: {self.hacer_caballito}"
        # return f"Marca: {self.marca}\nModelo: {self.modelo}\nAndando: {self.andando} \nAcelerando: {self.acelera}\nFrenando:{self.frena} \nCaballito: {self.hacer_caballito}"

objVehiculo = Vehiculos('Toyota','Accent')
objVehiculo.frenar()
print(objVehiculo)

objMoto = Moto('Honda','Cr100','Caballito')
print(objMoto.caballito())
objMoto.acelerar()
print(objMoto)