import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsoRoutingModule} from './uso-routing.module';
import {PagesModule} from '../../pages.module';
import {FormsModule} from '@angular/forms';
import {NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import {UsoComponent} from './uso.component';
import { UsoFormComponent } from './uso-form/uso-form.component';
import {SharedModule} from '../../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [
    UsoComponent,
    UsoFormComponent
  ],
    imports: [
        CommonModule,
        UsoRoutingModule,
        PagesModule,
        FormsModule,
        SharedModule,
        NgbTypeaheadModule,
        TranslateModule
    ]
})
export class UsoModule { }
