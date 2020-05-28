import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre2',
  templateUrl: './padre2.component.html',
  styles: [
  ]
})
export class Padre2Component implements OnInit {
  
  public valor = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public Suma(){
    this.valor = this.valor + 1;
  }

  public Resta(){
    this.valor = this.valor - 1;
  }

  public RecibirDato(valor){
    this.valor = valor;
  }

}
