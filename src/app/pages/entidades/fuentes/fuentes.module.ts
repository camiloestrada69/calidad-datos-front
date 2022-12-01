import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FuentesRoutingModule} from './fuentes-routing.module';
import {PagesModule} from '../../pages.module';
import {FormsModule} from '@angular/forms';
import {NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import {FuentesComponent} from './fuentes.component';
import { FuenteFormComponent } from './fuente-form/fuente-form.component';
import {SharedModule} from '../../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [
    FuentesComponent,
    FuenteFormComponent
  ],
    imports: [
        CommonModule,
        FuentesRoutingModule,
        PagesModule,
        FormsModule,
        NgbTypeaheadModule,
        SharedModule,
        TranslateModule
    ]
})
export class FuentesModule { }
