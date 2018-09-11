import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  lugares: any = [
    { id: 1, description:'negocio cualquiera mas adelante tendremos informacion',plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Donas la gordita' },
    { id: 2, description:'negocio cualquiera mas adelante tendremos informacion',plan: 'gratuito', cercania: 2, distancia: 1.8, active: true, nombre: 'Veterinaria huellas' },
    { id: 3, description:'negocio cualquiera mas adelante tendremos informacion',plan: 'gratuito', cercania: 3, distancia: 5, active: false, nombre: 'Floristeria la x' },
    { id: 4, description:'negocio cualquiera mas adelante tendremos informacion',plan: 'pagado', cercania: 3, distancia: 10, active: true, nombre: 'PaloMiulato' }
  ];
  id = null;
  lugar: any = {};
  constructor(private route: ActivatedRoute) {

    console.log(this.route.snapshot.params['id']);
    console.log(this.route.queryParams);
    this.id = this.route.snapshot.params['id'];
    this.lugar = this.buscarLugar();
  }

  buscarLugar() {
    return this.lugares.filter((lugar) => { return lugar.id == this.id })[0] || null;
  }

}
