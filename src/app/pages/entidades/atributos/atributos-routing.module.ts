import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AtributosListComponent} from './atributos-list/atributos-list.component';
import {AtributosFormComponent} from './atributos-form/atributos-form.component';

const routes: Routes = [
  {
    path: '',
    component: AtributosListComponent
  },
  {
    path: 'crear-atributo',
    component: AtributosFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtributosRoutingModule { }
