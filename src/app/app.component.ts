import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platzisquareLG';
  lugares: any = [
    {plan:'pagado'cercania:1, distancia: 1, active:true, nombre: 'Donas la gordita' },
    {plan:'gratuito'cercania:2, distancia: 1.8, active:true, nombre: 'Veterinaria huellas' },
    {plan:'gratuito'cercania:3, distancia: 5, active:false, nombre: 'Floristeria la x' },
    {plan:'pagado'cercania:3, distancia: 10, active:true, nombre: 'PaloMiulato' }
  ];

  
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() {

  }
}
