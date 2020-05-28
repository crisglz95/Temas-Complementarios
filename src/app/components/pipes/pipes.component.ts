import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [
  ]
})
export class PipesComponent implements OnInit {

  public valor: number = 123456;
  public fecha: Date = new Date();
  public valorDec: number = 0;
  public texto: string = 'HoLa MuNdO';
  public porcentaje: number = 0.12;
  public arregloNumerico: Array<number> = [1,2,3,4,5,6];
  public contrasena = '123456Cris';
  public mostrar: boolean = false;
  public urlImage = null;//'./../../../assets/img/spongeBob.jpg';
  public mul1 = 2;
  public mul2 = 3;

  constructor() { 
    this.valorDec = Math.PI;
  }

  ngOnInit(): void {
  }

}
