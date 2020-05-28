import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicacionBasica'
})
export class MultiplicacionBasicaPipe implements PipeTransform {

  transform(value: number, multiplicar: number): number {
    return value * multiplicar;
  }

}
