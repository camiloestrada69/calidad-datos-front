import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EsquemasComponent} from './entidades/esquemas/esquemas.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./configuraciones/configuraciones.module').then(m => m.ConfiguracionesModule)
  },
  {
    path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)
  },
  {
    path: 'configuraciones', loadChildren: () => import('./configuraciones/configuraciones.module').then(m => m.ConfiguracionesModule)
  },
  {
    path: 'entidades/esquemas/:tipoEsquema',
    component: EsquemasComponent,
    loadChildren: () => import('./entidades/entidades.module').then(m => m.EntidadesModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
