import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkExistImage'
})
export class CheckExistImagePipe implements PipeTransform {

  transform(value: string): string {
    console.log(value);
    if(value){
      return value;
    }else{
      return './../../../assets/img/not-gound.png';
    }
  }

}
