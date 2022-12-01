import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MacthComponent} from './macth.component';
import {MacthFormComponent} from './macth-form/macth-form.component';

const routes: Routes = [
  {
    path: '',
    component: MacthComponent
  },
  {
    path: 'crear-macth',
    component: MacthFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MacthRoutingModule { }
