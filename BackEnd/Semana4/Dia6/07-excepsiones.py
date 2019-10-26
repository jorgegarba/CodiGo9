# excepsiones => try ... except ... else... finally
try:
    numero1 = int(input("Ingrese numero 1: "))
    numero2 = int(input("Ingrese numero 2: "))
    division = numero1 / numero2
    print(division)
except ZeroDivisionError:
    print("No puedes dividir entre 0")
except:
    # para ver que error es el que estamos teniendo
    print(EnvironmentError)
    print("Tienes que ingresar un numero")
# el else se va a ejecutar siempre y cuando no entre a ninguna
else:
    print("La division funciono bien")
# el finally no le importa si funciono correctamente o hubo una excepsion, siempre se va a ejecutar
finally:
    print("Yo me ejecuto sin importar si hubo una correcta ejecucion")
# no es OBLIGATORIO que vayan else y finally, puede ir una o ninguna o todas, PERO si en ese orden (primero el else y luego el finally en el caso que vayan las dos)

# Que reciba dos numeros y que los multiple, si se ingresa un caracter o algo que no sea un numero que lo vuelva a pedir hasta que los dos sean numeros
print("MULTIPLICACION")
verdadero = True
while (verdadero):
    try:
        numero1 = int(input("Ingresa un numero:"))
        numero2 = int(input("Ingresa un numero:"))
        print("La multiplicacion es: {}".format(numero1*numero2))
    except:
        print("Tiene que ingresar un numero")
    else:
        verdadero=False