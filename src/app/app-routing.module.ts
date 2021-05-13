import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CuerpoComponent} from './components/cuerpo/cuerpo.component';
import {Cuerpo2Component} from './components/cuerpo2/cuerpo2.component';

const routes: Routes = [
  { path: 'cuerpo-component', component: CuerpoComponent },
  { path: 'cuerpo2-component', component: Cuerpo2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
