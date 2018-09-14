import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent {
  title = 'platzisquareLG';


  lat: number = 5.4600145;
  lng: number = -74.342902;
  lugares = null;

  constructor(private lugaresService: LugaresService) {
    this.lugares = lugaresService.getLugares();
  }
}

