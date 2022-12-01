import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MacthRoutingModule} from './macth-routing.module';
import {PagesModule} from '../../pages.module';
import {FormsModule} from '@angular/forms';
import {NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import {MacthComponent} from './macth.component';
import { MacthFormComponent } from './macth-form/macth-form.component';
import {SharedModule} from '../../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [
    MacthComponent,
    MacthFormComponent
  ],
    imports: [
        CommonModule,
        MacthRoutingModule,
        PagesModule,
        FormsModule,
        NgbTypeaheadModule,
        SharedModule,
        TranslateModule
    ]
})
export class MacthModule { }
