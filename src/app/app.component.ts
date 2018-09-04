import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platzisquareLG';
  lugares: any = [
    { active:true, nombre: 'Donas la gordita' },
    { active:true, nombre: 'Veterinaria huellas' },
    { active:false, nombre: 'Floristeria la x' },
    { active:true, nombre: 'PaloMiulato' }
  ];

  
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() {

  }
}
