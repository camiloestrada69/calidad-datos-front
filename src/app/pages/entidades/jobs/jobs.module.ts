import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobsRoutingModule} from './jobs-routing.module';
import {PagesModule} from '../../pages.module';
import {FormsModule} from '@angular/forms';
import {NgbDatepickerModule, NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import {JobsComponent} from './jobs.component';
import { JobFormComponent } from './job-form/job-form.component';
import {SharedModule} from '../../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [
    JobsComponent,
    JobFormComponent
  ],
    imports: [
        CommonModule,
        JobsRoutingModule,
        PagesModule,
        FormsModule,
        NgbTypeaheadModule,
        SharedModule,
        NgbDatepickerModule,
        TranslateModule
    ]
})
export class JobsModule { }
