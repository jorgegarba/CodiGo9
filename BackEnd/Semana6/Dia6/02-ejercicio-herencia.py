# Tenemos una clase padre llamada Persona que tiene como constructor un nombre, edad, nacionalidad y dni y sobreescribir su metodo str para que me diga lo siguiente : "Hola me llamo ___, tengo ___ años, soy ____ y mi DNI es ___", luego tener una clase hijo que sea Empleado que herede de Persona y que su constructor aparte de recibir los parametros anteriores que reciba el salario y antiguedad y que su metodo str aparte de lo anterior aumente lo siguiente: "trabajo hace ___ años y mi salario es de S/____"
class Persona ():
    def __init__(self, nombre, edad, nacionalidad, dni):
        self.nombre = nombre
        self.edad = edad
        self.nacionalidad = nacionalidad
        self.dni = dni
    def __str__(self):
        return f"Hola me llamo {self.nombre}, tengo {self.edad}, soy {self.nacionalidad} y mi DNI es {self.dni}"

class Empleado(Persona):
    def __init__(self, nombre_per, edad_per, nacionalidad_per, dni_per, salario, antiguedad):
        self.salario = salario
        self.antiguedad = antiguedad
        super().__init__(nombre_per,edad_per,nacionalidad_per,dni_per)
    def __str__(self):
        return super().__str__()+ f" trabajo hace {self.antiguedad} años y mi salario es de {self.salario}"

objPersona = Persona('Juan',25,'Chamo',52682457)
print(objPersona)

objEmpleado = Empleado('Maria',30,'Peruana',25478951,1500,3)
print(objEmpleado)