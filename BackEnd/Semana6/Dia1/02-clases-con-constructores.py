class Persona:
    # el constructor en python de declara por medio de un metodo definido __init__ que significa inicializacion, sirve para declarar los atributos de la clase y para ser utilizados en toda la clase
    # self es la referencia a la clase para acceder a todos sus atributos y metodos, es, en comparativa con c#, java, javascript, entre otros, con this.
    # NOTA: En todo metodo de la clase que vaya a utilizar sus atributos se le manda como parametro self
    def __init__(self, nomb, ed):
        self.nombre = nomb
        self.edad = ed

    def saludar(self):
        """Funcion que no recibe parametros pero que hace una impresion de pantalla con los atributos de la clase"""
        print(f"Hola, me llamo {self.nombre} y tengo {self.edad} años")


persona1 = Persona("Eduardo", 26)
# print(persona1.nombre)
# persona1.saludar()

# crear una clase llamada Alumno y que reciba en su constructor el nombre y su fecha de nacimiento y un atributo cursos que va a ser un array vacio y por medio de un menu ingresar: 1. Un nuevo curso, 2. Mostrar los cursos, 3. Mostrar su edad, 4. Salir, ademas un metodo que nos diga cuantos años tiene en base a su fecha de nacimiento

from datetime import datetime
class Alumno:
    def __init__(self, nombre, fecha_nacimiento):
        self.nombre = nombre
        self.fecha_nacimiento = fecha_nacimiento
        self.cursos = []

    def agregarCurso(self, nombreCurso):
        self.cursos.append(nombreCurso)

    # Este metodo magico sirve para sobreescribir la definicion del objeto
    def __str__(self):
        return f"El alumno se llama {self.nombre} y su fecha de nacimiento es {self.fecha_nacimiento}"

    def mostrarCursos(self):
        print(self.cursos)

    def calcularEdad(self):
        fecha_nacimiento = datetime(int(self.fecha_nacimiento[0:4]),int(self.fecha_nacimiento[5:7]),int(self.fecha_nacimiento[8:10]))
        anio_actual = datetime.now().year
        resultado=anio_actual-fecha_nacimiento.year
        print(f"El alumno {self.nombre} tiene {resultado} años")


juancito = Alumno("Juan", "2005-10-05")
# print(juancito)
while(True):
    opc = input("Menu\n1.Agregar Curso\n2.Mostrar Cursos\n3.Mostrar Edad\n4. Salir\nIngrese una opcion: ")
    if(opc=="1"):
        curso = input("Ingrese el nombre del curso: ")
        juancito.agregarCurso(curso)
    elif opc=="2":
        juancito.mostrarCursos()
    elif opc=="3":
        juancito.calcularEdad()
    else:
        print("Adiocito")
        break
