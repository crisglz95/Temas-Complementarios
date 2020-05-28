import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styles: [
  ]
})
export class Hijo1Component implements OnInit {

  @Input() valorPadre_Hijo: string;
  @Output() EnergiaPersonas = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public EnviarEnergia(valor: boolean){
    this.EnergiaPersonas.emit(valor);
  }

}
