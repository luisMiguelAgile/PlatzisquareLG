import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { ResaltarDirective } from './directives/resaltar.directives';
import { ContarClicksDirective } from './directives/contar-clicks.directives';

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective 
  ],
  imports: [
    BrowserModule,FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAnrmfEFY5RF47AzR7SR9TLMO9R7fVSmcA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
