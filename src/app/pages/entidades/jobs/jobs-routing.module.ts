import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JobsComponent} from './jobs.component';
import {JobFormComponent} from './job-form/job-form.component';

const routes: Routes = [
  {
    path: '',
    component: JobsComponent
  },
  {
    path: 'crear-job',
    component: JobFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
