from datetime import datetime

fecha_y_hora = datetime.now()
print(fecha_y_hora)
print(fecha_y_hora.year)
print(fecha_y_hora.month)
print(fecha_y_hora.day)
print(fecha_y_hora.hour)
print(fecha_y_hora.minute)
print(fecha_y_hora.microsecond)
print(fecha_y_hora)
print(type(fecha_y_hora))
formatoYYMMDD = str(fecha_y_hora.year)+'/'+str(fecha_y_hora.month)+'/'+str(fecha_y_hora.day)
print(formatoYYMMDD)
