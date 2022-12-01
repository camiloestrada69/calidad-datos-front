import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ConfiguracionesRoutingModule} from './configuraciones-routing.module';
import {ConexionesComponent} from './conexiones/conexiones.component';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RegistroConexionComponent} from './registro-conexion/registro-conexion.component';
import {ConfiguracionConexionComponent} from './configuracion-conexion/configuracion-conexion.component';
import {CreacionConexionComponent} from './creacion-conexion/creacion-conexion.component';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [
    ConexionesComponent,
    RegistroConexionComponent,
    ConfiguracionConexionComponent,
    CreacionConexionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ConfiguracionesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    TranslateModule
  ],
})
export class ConfiguracionesModule { }
