import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsoComponent} from './uso.component';
import {UsoFormComponent} from './uso-form/uso-form.component';

const routes: Routes = [
  {
    path: '',
    component: UsoComponent
  },
  {
    path: 'crear-uso',
    component: UsoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsoRoutingModule { }
