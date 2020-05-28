import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styles: [
  ]
})
export class NgClassComponent implements OnInit {

  public people: any[] = [
    {
      name: 'Douglas Pace', 
      age: 35,
      country: 'MARS'
    },
    {
      name: 'Peter Parker', 
      age: 28,
      country: 'MX'
    },
    {
      name: 'Jose Carlos', 
      age: 23,
      country: 'USA'
    },
    {
      name: 'Ricardo Peralta', 
      age: 24,
      country: 'CH'
    }
  ];

  public color = true;

  constructor() { }

  ngOnInit(): void {
  }

  public GetColor(country: string){
    switch(country){
      case 'CH':
        return 'red';
      case 'USA':
        return 'blue';
      case 'MX':
        return 'yelllow';
      default:
        return 'purple';
    }
  }

}
