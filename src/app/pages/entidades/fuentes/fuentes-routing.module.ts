import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FuentesComponent} from './fuentes.component';
import {FuenteFormComponent} from './fuente-form/fuente-form.component';

const routes: Routes = [
  {
    path: '',
    component: FuentesComponent
  },
  {
    path: 'crear-fuente',
    component: FuenteFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuentesRoutingModule { }
