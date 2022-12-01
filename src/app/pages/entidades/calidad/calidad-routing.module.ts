import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalidadComponent} from './calidad.component';
import {CalidadFormComponent} from './calidad-form/calidad-form.component';

const routes: Routes = [
  {
    path: '',
    component: CalidadComponent
  },
  {
    path: 'crear-regla-calidad',
    component: CalidadFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalidadRoutingModule { }
