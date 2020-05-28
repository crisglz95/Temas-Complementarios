import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeInput]'
})
export class ChangeInputDirective {
  private arrayColors: Array<string> = ['blue', 'red', 'yellow', 'purple', 'green', 'orange', 'brown', 'pink'];

  constructor(private el: ElementRef, private render: Renderer2) { 
    console.log(el.nativeElement);
  }
  
  @HostListener('keypress') onChange(){
    let idx = Math.floor(Math.random() * this.arrayColors.length);
    this.render.setStyle(
      this.el.nativeElement,
      'color',
      this.arrayColors[idx]
    );
    this.render.setStyle(
      this.el.nativeElement,
      'outline-color',
      this.arrayColors[idx],
    );
  }

}
