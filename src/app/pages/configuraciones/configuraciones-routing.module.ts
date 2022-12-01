import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConexionesComponent} from './conexiones/conexiones.component';
import {RegistroConexionComponent} from './registro-conexion/registro-conexion.component';
import {ConexionResolver} from '@app/core/resolvers/conexion.resolver';
import {ID} from '@utils/constants';

const routes: Routes = [
  {
    path: '',
    component: ConexionesComponent
  },
  {
    path: 'conexiones',
    component: ConexionesComponent,
  },
  {
    path: 'conexiones/registro-conexion',
    component: RegistroConexionComponent
  },
  {
    path: `conexiones/actualizacion-conexion/:${ID}`,
    component: RegistroConexionComponent,
    resolve: { conexionResolver: ConexionResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracionesRoutingModule {
}
