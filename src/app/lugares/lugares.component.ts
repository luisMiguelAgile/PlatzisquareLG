import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent  {
  title = 'platzisquareLG';
  lugares: any = [
    { plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Donas la gordita' },
    { plan: 'gratuito', cercania: 2, distancia: 1.8, active: true, nombre: 'Veterinaria huellas' },
    { plan: 'gratuito', cercania: 3, distancia: 5, active: false, nombre: 'Floristeria la x' },
    { plan: 'pagado', cercania: 3, distancia: 10, active: true, nombre: 'PaloMiulato' }
  ];


  lat: number = 5.4600145;
  lng: number = -74.342902;
  constructor() {

  }
}
}
