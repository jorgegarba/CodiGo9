import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return value + "Custom";
  }
}
