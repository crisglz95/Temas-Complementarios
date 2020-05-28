import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private el: ElementRef, private render: Renderer2) {
    console.log(el);
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.render.setStyle(
      this.el.nativeElement,
      'background',
      'black'
    );
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.render.setStyle(
      this.el.nativeElement, 
      'background',
      'yellow'
    )
  }


}
