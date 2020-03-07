import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pascal'
})
export class PascalPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    // SEPARO POR ESPACIO LA PALABRAS
    let arr = String(value).split(" ");
    // arreglo VACIO
    let arrTmp = []
    arr.forEach((palabra) => {
      let primero = palabra.charAt(0).toUpperCase();
      let resto = palabra.substr(1, palabra.length);
      let todo = primero + resto;
      arrTmp.push(todo);
    });
    let junto = arrTmp.join(" ")
    return junto;
  }
}
