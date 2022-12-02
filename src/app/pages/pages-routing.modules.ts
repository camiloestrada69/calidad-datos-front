import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardsComponent} from './dashboards/dashboards.component';
import {UiComponent} from './ui/ui.component';
import {TypographyComponent} from './typography/typography.component';
import {ChartsComponent} from './charts/charts.component';
import {MapsComponent} from './maps/maps.component';
import {EsquemasComponent} from './entidades/esquemas/esquemas.component';
import {BienvenidaComponent} from './bienvenida/bienvenida.component';

const routes: Routes = [
  {
    path: '',
    component: BienvenidaComponent
  },
  { path: 'pages', loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule) },
  {
    path: 'ui',
    component: UiComponent
  },
  {
    path: 'advanced', loadChildren: () => import('./advanced/advanced.module').then(m => m.AdvancedModule)
  },
  {
    path: 'typography',
    component: TypographyComponent
  },
  {
    path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule)
  },
  {
    path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)
  },
  { path: 'charts', component: ChartsComponent },
  {
    path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule)
  },
  { path: 'maps', component: MapsComponent },
  {
    path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule)
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
export class PagesRoutingModule { }
