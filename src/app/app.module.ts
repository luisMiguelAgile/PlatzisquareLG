import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { ResaltarDirective } from './directives/resaltar.directives';
import { ContarClicksDirective } from './directives/contar-clicks.directives';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CrearComponent } from './crear/crear.component';



export const firebaseConfig = {
  apiKey: "AIzaSyBwglhQhiz_2YJb7U7jkzwwsDnudqF0pLQ",
  authDomain: "platzisquarelg.firebaseapp.com",
  databaseURL: "https://platzisquarelg.firebaseio.com",
  storageBucket: "platzisquarelg.appspot.com",
  messagingSenderId: '1024535485453'
};

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'lugares', component: LugaresComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'crear', component: CrearComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAnrmfEFY5RF47AzR7SR9TLMO9R7fVSmcA'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
