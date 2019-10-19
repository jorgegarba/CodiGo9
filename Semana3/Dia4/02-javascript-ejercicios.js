/*
var nota = 15
if (nota >= 13) {
    console.log("Estas aprobado");
}
else {
    console.log("Estas desaprobado");
}

// Si el viernes es fin de mes (31) puedo viajar al colca y si
// no es fin de mes puedo viajar a Salinas
var viernes = 31;
if (viernes == 31) {
    console.log("Puedo viajar al colca");
}
else {
    console.log("Puedo viajar a Salinas");
}

// Si el camaron no esta en veda puedo comer un chupe
// sino un cuy chactao
var mes = 5
if (mes > 0 && mes < 12) {
    if (mes > 3) {
        console.log("Puedo comer un chupe")
    }
    else {
        console.log("Puedo comer cuy chactado")
    }
}
else {
    console.log("Mes invalido. Ahora no comes nada")
}
*/
var ejercicio = +prompt("Ingrese el numero de ejercicio par");
switch (ejercicio) {
    case 2:
        // Realice un algoritmo para determinar el sueldo semanal de un trabajador
        // con base en las horas trabajadas y el pago por hora, considerando 
        // que después de las 40 horas cada hora se considera como
        // excedente y se paga el doble. Construya el diagrama de flujo, el
        // pseudocódigo y el diagrama N/S.
        var horas_trabajadas = +prompt("Ingrese la cantidad de horas");
        var pago = 0;
        var pago_x_hora = 3.5;
        var pago_horas_extras = 0;
        if (horas_trabajadas >= 40) {
            var horas_extras = horas_trabajadas - 40
            pago_horas_extras = horas_extras * (pago_x_hora * 2);
            pago = (horas_trabajadas - horas_extras) * pago_x_hora;
        }
        else {
            pago = horas_trabajadas * pago_x_hora;
        }
        console.log(`El pago es: ${pago + pago_horas_extras}`);
        break;
    case 4:
        // El dueño de un estacionamiento requiere un diagrama de flujo con
        // el algoritmo que le permita determinar cuánto debe cobrar por el
        // uso del estacionamiento a sus clientes. Las tarifas que se tienen son
        // las siguientes:
        // Las dos primeras horas a $5.00 c/u.
        // Las siguientes tres a $4.00 c/u.
        // Las cinco siguientes a $3.00 c/u.
        // Después de diez horas el costo por cada una es de dos pesos.
        var cantidad_de_horas = 20;
        var precio_a_cobrar = 0;
        if (cantidad_de_horas <= 2) {
            precio_a_cobrar = 5 * cantidad_de_horas;
            console.log("El precio a cobrar es:" + precio_a_cobrar);
        }
        else {
            if (cantidad_de_horas > 2 && cantidad_de_horas < 6) {
                precio_a_cobrar = (4 * (cantidad_de_horas - 2)) + 10;
                console.log("El precio a cobrar es: " + precio_a_cobrar);
            }
            else {
                if (cantidad_de_horas > 5 && cantidad_de_horas <= 10) {
                    precio_a_cobrar = (3 * (cantidad_de_horas - 5)) + 22;
                    console.log("El precio a cobrar es: " + precio_a_cobrar);
                }
                else {
                    precio_a_cobrar = (2 * (cantidad_de_horas - 10) + 37);
                    console.log("El precio a cobrar es: " + precio_a_cobrar);
                }
            }
        }
        break;
    case 6:
        // Realice el diagrama de flujo, el pseudocódigo y el diagrama N/S que
        // muestren el algoritmo para determinar el costo y el descuento que
        // tendrá un artículo. Considere que si su precio es mayor o igual a
        // $200 se le aplica un descuento de 15%, y si su precio es mayor a $100
        // pero menor a $200, el descuento es de 12%, y si es menor a $100,
        // sólo 10%.
        var precio = +prompt("Ingrese el precio del articulo");
        var dscto = 0;
        switch (true) {
            case (precio >= 200):
                dscto = 15;
                break;
            case (precio > 100 && precio < 200):
                dscto = 12;
                break;
            case (precio <= 100):
                dscto = 10;
                break;
        }
        console.log(`El precio del producto es ${precio} y con su dscto sale ${precio * ((dscto / 100) + 1)}`);
        break;
    case 8:
        // Cierta empresa proporciona un bono mensual a sus trabajadores, el
        // cual puede ser por su antigüedad o bien por el monto de su sueldo
        // (el que sea mayor), de la siguiente forma:
        // Cuando la antigüedad es mayor a 2 años pero menor a 5, se otorga
        // 20 % de su sueldo; cuando es de 5 años o más, 30 %. Ahora bien, el
        // bono por concepto de sueldo, si éste es menor a $1000, se da 25 %
        // de éste, cuando éste es mayor a $1000, pero menor o igual a $3500,
        // se otorga 15% de su sueldo, para más de $3500. 10%. Realice el
        // algoritmo correspondiente para calcular los dos tipos de bono, asignando
        // el mayor, y represéntelo con un diagrama de flujo y pseudocódigo.
        var antiguedad = +prompt("Ingrese la antigüedad");
        var sueldo = +prompt("Ingrese su sueldo");
        var bono_sueldo = 0, bono_antiguedad = 0;
        switch (true) {
            case (antiguedad > 2 && antiguedad < 5):
                bono_antiguedad = 20;
            case (antiguedad >= 5):
                bono_antiguedad = 30;
            case (sueldo <= 1000):
                bono_sueldo = 25;
            case (sueldo > 1000 && sueldo <= 3500):
                bono_sueldo = 15;
            case (sueldo > 3500):
                bono_sueldo = 10;
        }
        if (bono_sueldo > bono_antiguedad) {
            console.log(`El sueldo es ${sueldo} y su bono es de ${bono_sueldo}% por lo que su monto es ${sueldo * ((bono_sueldo / 100) + 1)}`);
        } else {
            console.log(`El sueldo es ${sueldo} y su bono es de ${bono_antiguedad}% por lo que su monto es ${sueldo * ((bono_antiguedad / 100) + 1)}`);
        }
        break;
    case 10:
        // Represente un algoritmo mediante un diagrama de flujo y el pseudocódigo
        // para determinar a qué lugar podrá ir de vacaciones una
        // persona, considerando que la línea de autobuses “La tortuga” cobra
        // por kilómetro recorrido. Se debe considerar el costo del pasaje tanto
        // de ida, como de vuelta; los datos que se conocen y que son fijos son:
        // México, 750 km; P.V., 800 km; Acapulco, 1200 km, y Cancún, 1800
        // km. También se debe considerar la posibilidad de tener que quedarse
        // en casa.
        var costo_por_kilometro = 2.5;
        var dinero = +prompt("Ingrese su monto disponible");
        var mexico = 750 * costo_por_kilometro * 2, pv = 800 * costo_por_kilometro * 2, acapulco = 1200 * costo_por_kilometro * 2, cancun = 1800 * costo_por_kilometro * 2;
        switch (true) {
            case (dinero >= mexico):
                console.log("Puedes ir a Mexico");
            case (dinero >= pv):
                console.log("Puedes ir a Puerto Valencia");
            case (dinero >= acapulco):
                console.log("Puedes ir a Acapulco");
            case (dinero >= cancun):
                console.log("Puedes ir a Cancun");
            default:
                console.log("No te alcanza, quedate en casa");
        }
        break;
    case 12:
        // Realice un algoritmo que permita determinar el sueldo semanal de
        // un trabajador con base en las horas trabajadas y el pago por hora,
        // considerando que a partir de la hora número 41 y hasta la 45, cada
        // hora se le paga el doble, de la hora 46 a la 50, el triple, y que trabajar
        // más de 50 horas no está permitido. Represente el algoritmo mediante
        // el diagrama de flujo, el pseudocódigo y el diagrama N/S.
        var horas_trabajadas = +prompt("Ingrese la cantidad de horas trabajadas");
        var pago_x_hora = +prompt("Ingrese el pago por hora");
        var paga = 0;

        switch (true) {
            case (horas_trabajadas <= 40):
                paga = horas_trabajadas * pago_x_hora;
                break;
            case (horas_trabajadas <= 45 && horas_trabajadas > 40):
                paga = (horas_trabajadas - 40) * pago_x_hora * 2 + (40 * pago_x_hora);
                break;
            case (horas_trabajadas <= 50 && horas_trabajadas > 45):
                paga = (horas_trabajadas - 45) * pago_x_hora * 3 + (40 * pago_x_hora) + (45 * pago_x_hora);
                break;
            default:
                console.log("No esta permitido");
                break;
        }
        console.log(`Su pago es: ${paga}`);
        break;
    case 14:
        // Realice un algoritmo que, con base en una calificación proporcionada
        // (0-10), indique con letra la calificación que le corresponde: 10 es
        // “A”, 9 es “B”, 8 es “C”, 7 y 6 son “D”, y de 5 a 0 son “F”. Represente
        // el diagrama de flujo, el pseudocódigo y el diagrama N/S correspondiente.
        var nota = +prompt("Ingrese la nota del 0 al 10");
        if (nota >= 0 && nota <= 10) {
            switch (true) {
                case nota === 10:
                    console.log("La nota es A");
                    break;
                case nota === 9:
                    console.log("La nota es B");
                    break;
                case nota === 8:
                    console.log("La nota es C");
                    break;
                case (nota === 7 || nota === 6):
                    console.log("La nota es D");
                    break;
                default:
                    console.log("La nota es F");
                    break;
            }
        } else {
            console.log("Nota incorrecta");

        }
        break;
    case 16:
        // El secretario de educación ha decidido otorgar un bono por desempeño
        // a todos los profesores con base en la puntuación siguiente:
        //         Realice un algoritmo que permita determine el monto de bono que
        //         percibirá un profesor(debe capturar el valor del salario mínimo y
        // los puntos del profesor).
        var salario = +prompt("Ingrese su salario");
        var puntos = +prompt("Ingrese la cantidad de puntos");
        if (puntos <= 100) {
            console.log(`Su bono de regalo es: ${salario}`);
        }
        if (puntos > 100 && puntos <= 150) {
            console.log(`Su bono de regalo es: ${salario * 2}`);
        }
        else {
            console.log(`Su bono de regalo es: ${salario * 3}`);
        }
        break;
    case 18:
        // Realice un algoritmo y represéntelo mediante el diagrama de flujo,
        // el pseudocódigo y el diagrama N/S que permitan determinar la cantidad
        // del bono navideño que recibirá un empleado de una tienda,
        // considerando que si su antigüedad es mayor a cuatro años o su sueldo
        // es menor de dos mil pesos, le corresponderá 25 % de su sueldo, y
        // en caso contrario sólo le corresponderá 20 % de éste.
        var anio = +prompt("Antiguedad trabajando");
        var sueldo = +prompt("Ingrese su sueldo")
        if (anio > 4 || sueldo < 2000) {
            console.log(`El bono es de: ${sueldo * .25} y el total es de: ${sueldo + (sueldo * .25)}`);
        } else {
            console.log(`El bono es de: ${sueldo * .2} y el total es de: ${sueldo + (sueldo * .2)}`);
        }
        break;
    case 20:
        // Realice un algoritmo para resolver el siguiente problema: una fábrica
        // de pantalones desea calcular cuál es el precio final de venta
        // y cuánto ganará por los N pantalones que produzca con el corte de
        // alguno de sus modelos, para esto se cuenta con la siguiente información:
        // a) Tiene dos modelos A y B, tallas 30, 32 y 36 para ambos modelos.
        // b) Para el modelo A se utiliza 1.50 m de tela, y para el B 1.80 m.
        // c) Al modelo A se le carga 80 % del costo de la tela, por mano de
        // obra. Al modelo B se le carga 95 % del costo de la tela, por el
        // mismo concepto.
        // d) A las tallas 32 y 36 se les carga 4 % del costo generado por
        // mano de obra y tela, sin importar el modelo.
        // e) Cuando se realiza el corte para fabricar una prenda sólo se hace
        // de un solo modelo y una sola talla.
        // f) Finalmente, a la suma de estos costos se les carga 30%, que
        // representa la ganancia extra de la tienda.
        var tela = +prompt("Ingrese los metros de tela a usar");
        var costo_por_tela = +prompt("Ingrese el costo de metro de tela");
        var modelo = prompt("modelo A o B");
        var talla = +prompt("Talla 30, 32 o 34");
        var costo_total = tela * costo_por_tela;
        var cantidad = 0, precio_venta = 0, ganancia = 0, venta = 0;
        if (modelo === "A") {
            cantidad = tela / 1.5;
            venta = costo_total * 1.80;
        } else {
            cantidad = tela / 1.80;
            venta = costo_total * 1.95;
        }
        if (talla > 30) {
            venta = venta * 1.04;
        }
        ganancia = venta * 0.3;
        venta += ganancia;
        precio_venta = venta / cantidad;
        console.log(`Se producira ${cantidad} unidades de pantalones con un precio de venta de S/${precio_venta} y se tendra una ganacia de S/${ganancia}`);
        break;
    default:
        alert("Solo hay 20 ejercicios (numeros pares)")
        break;
}

//04


