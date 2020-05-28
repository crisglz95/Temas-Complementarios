import { Directive, ElementRef } from '@angular/core';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[appRandomColor]'
})
export class RandomColorDirective {

  private arrayColors: Array<string> = ['blue', 'red', 'yellow', 'purple', 'green', 'orange', 'brown', 'pink'];

  constructor(private el: ElementRef) { 
    this.ChangeColor();
  }

  public ChangeColor(){
    timer(0,2000).pipe(
      map(() => {
        let numeroAleatorio = Math.floor(Math.random() * this.arrayColors.length);
        return this.arrayColors[numeroAleatorio];
      })
    ).subscribe(
      (color) => (this.el.nativeElement.style.background = color)
    )
  }

}
