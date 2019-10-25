dia = input("Ingrese el dia de la semana: ")
if(dia != "Lunes" and dia!="Martes" and dia!="Miercoles"):
    print("Puedes hacer lo que quiera")
else:
    monto = int(input("Ingresa el monto: "))
    if(dia=="Lunes"):
        if(monto>20 and monto<=50):
            print("Puedes ir al cine")
        elif(monto>50):
            print("Puedes comer un pollito con papas")
        else:
            print("Tas misio")
    elif(dia=="Martes"):
        if(monto>=15 and monto<=30):
            print("Puedes comer una pizza 2x1")
        elif(monto>=30 and monto<=50):
            print("Puedes ir a los juegos mecanicos")
        elif(monto>50):
            print("Puedes ir a los juegos y comer pizza")
        else:
            print("Tas misio")
    elif (dia=="Miercoles"):
        if(monto>=20 and monto<=30):
            print("Puedes comer un KFC")
        if(monto<20):
            print("Puedes comer una chanfainita")
        else:
            print("Puedes comer un PP's")
    else:
        print("Puedes hacer lo que quiera")
