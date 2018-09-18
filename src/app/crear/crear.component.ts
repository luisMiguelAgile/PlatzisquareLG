import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {
  lugar: any = {};

  guardarLugar() {
    this.lugar.id = Date.now();
    this.lugaresService.guardarLugar(this.lugar);
    alert('Negocio guardado con exito');
    this.lugar = {};
  }
  constructor(private lugaresService: LugaresService) {

  }



}
