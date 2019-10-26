# un modulo o una libreria tiene funcionalidades que alguien mas ya la hizo y por ende se puede reutilizar a favor nuestro.
# Para ver las librerias que tenemos instaladas en nuestro maquina usamos el comando pip list
# Para ver las librerias en COLAB o Jupyter se pone el prefijo de exclamacion osea !pip list
# para ver la version de nuestro pip se usa el comando pip --version
# para desinstalar una libreria usamos el comando pip uninstall nombre
import camelcase
camello = camelcase.CamelCase('tardes')
texto = "hola amiguitos buenas tardes"
print(camello.hump(texto))