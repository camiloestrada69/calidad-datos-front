import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EntidadesRoutingModule} from './entidades-routing.module';
import {EsquemasComponent} from './esquemas/esquemas.component';
import {CountToModule} from 'angular-count-to';
import {HeaderEsquemaComponent} from './header-esquema/header-esquema.component';
import {SharedModule} from '../../shared/shared.module';
import {NgbModule, NgbNavModule, NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import {AdministracionDatosComponent} from './administracion-datos/administracion-datos.component';
import {TreeTableModule} from 'primeng/treetable';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [
    EsquemasComponent,
    HeaderEsquemaComponent,
    AdministracionDatosComponent
  ],
    imports: [
        CommonModule,
        EntidadesRoutingModule,
        CountToModule,
        SharedModule,
        NgbNavModule,
        NgbModule,
        TreeTableModule,
        FormsModule,
        NgbTypeaheadModule,
        TranslateModule
    ]
})
export class EntidadesModule { }
