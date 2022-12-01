import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AtributosListComponent} from './atributos-list/atributos-list.component';
import {AtributosRoutingModule} from './atributos-routing.module';
import {PagesModule} from '../../pages.module';
import {FormsModule} from '@angular/forms';
import {NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import { AtributosFormComponent } from './atributos-form/atributos-form.component';
import {SharedModule} from '../../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [
    AtributosListComponent,
    AtributosFormComponent
  ],
    imports: [
        CommonModule,
        AtributosRoutingModule,
        PagesModule,
        FormsModule,
        NgbTypeaheadModule,
        SharedModule,
        TranslateModule
    ]
})
export class AtributosModule { }
