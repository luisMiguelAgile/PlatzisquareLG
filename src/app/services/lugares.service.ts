import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LugaresService {
    lugares: any = [
        { id: 1, descripcion: 'las mejores Donas', plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Donas la gordita' },
        { id: 2, descripcion: 'perro salud', plan: 'gratuito', cercania: 2, distancia: 1.8, active: true, nombre: 'Veterinaria huellas' },
        { id: 3, descripcion: 'la mejor flor', plan: 'gratuito', cercania: 3, distancia: 5, active: true, nombre: 'Floristeria la x' },
        { id: 4, descripcion: 'la lemor', plan: 'pagado', cercania: 3, distancia: 10, active: true, nombre: 'PaloMiulato' },
        { id: 5, descripcion: 'que rico', plan: 'gratuito', cercania: 2, distancia: 1.8, active: true, nombre: 'Restaurante Delicias' },
        { id: 6, descripcion: 'no duele', plan: 'gratuito', cercania: 3, distancia: 5, active: true, nombre: 'Odontologia muelitas' },
        { id: 7, descripcion: 'muy alto', plan: 'pagado', cercania: 3, distancia: 10, active: true, nombre: 'Palo Alto' }
    ];
    constructor(private afDB: AngularFireDatabase, private http: HttpClient) { }
    public getLugares() {
        return this.afDB.list('lugares/');
    }

    public buscarLugar(id) {
        return this.lugares.filter((lugar) => { return lugar.id == id })[0] || null;
    }

    public guardarLugar(lugar) {
        console.log(lugar);
        this.afDB.database.ref('lugares/' + lugar.id).set(lugar);

    }
    public obtenerGeoData(direccion) {
        // http://maps.google.com/maps/api/geocode/xml?address=78-43+diagonal+70f,+Bogota,Colombia
        return this.http.get('http://maps.google.com/maps/api/geocode/xml?address' + direccion);
    }

}
