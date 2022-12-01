import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalidadRoutingModule} from './calidad-routing.module';
import {PagesModule} from '../../pages.module';
import {FormsModule} from '@angular/forms';
import {NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import {CalidadComponent} from './calidad.component';
import { CalidadFormComponent } from './calidad-form/calidad-form.component';
import {SharedModule} from '../../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [
    CalidadComponent,
    CalidadFormComponent
  ],
    imports: [
        CommonModule,
        CalidadRoutingModule,
        PagesModule,
        FormsModule,
        NgbTypeaheadModule,
        SharedModule,
        TranslateModule
    ]
})
export class CalidadModule { }
