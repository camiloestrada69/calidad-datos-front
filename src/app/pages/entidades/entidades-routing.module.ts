import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EsquemasComponent} from './esquemas/esquemas.component';
import {AdministracionDatosComponent} from './administracion-datos/administracion-datos.component';

const routes: Routes = [
  {
    path: '',
    component: EsquemasComponent
  },
  {
    path: 'administracion-datos',
    component: AdministracionDatosComponent
  },
  {
    path: 'atributos',
    loadChildren: () => import('./atributos/atributos.module').then(m => m.AtributosModule)
  },
  {
    path: 'calidad-datos',
    loadChildren: () => import('./calidad/calidad.module').then(m => m.CalidadModule)
  },
  {
    path: 'usos',
    loadChildren: () => import('./uso/uso.module').then(m => m.UsoModule)
  },
  {
    path: 'fuentes',
    loadChildren: () => import('./fuentes/fuentes.module').then(m => m.FuentesModule)
  },
  {
    path: 'macth',
    loadChildren: () => import('./macth/macth.module').then(m => m.MacthModule)
  },
  {
    path: 'jobs',
    loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntidadesRoutingModule { }
