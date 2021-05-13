import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabezeraComponent } from './components/cabezera/cabezera.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { Cuerpo2Component } from './components/cuerpo2/cuerpo2.component';

@NgModule({
  declarations: [
    AppComponent,
    CabezeraComponent,
    CuerpoComponent,
    Cuerpo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
