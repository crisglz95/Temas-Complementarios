import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styles: [
  ]
})
export class PadreComponent implements OnInit {

  public valorPadre: string;
  public genkidamaImg: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  getValorPadre(valor: string){
    this.valorPadre = valor;
  }

  public ReunirEnergia(energiaCompleta){
    if(energiaCompleta){
      this.genkidamaImg = './../../../../assets/goku.png';
    }

  }

}
