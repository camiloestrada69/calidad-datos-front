import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CountToModule} from 'angular-count-to';

import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {NgApexchartsModule} from 'ng-apexcharts';
import {
  NgbAccordionModule,
  NgbCollapseModule,
  NgbDropdownModule,
  NgbNavModule,
  NgbPopoverModule,
  NgbProgressbarModule,
  NgbTooltipModule
} from '@ng-bootstrap/ng-bootstrap';
import {AgmCoreModule} from '@agm/core';

import {PagesRoutingModule} from './pages-routing.modules';
import {SharedModule} from '@shared/shared.module';
import {FormsModule} from '@angular/forms';
import {BienvenidaComponent} from './bienvenida/bienvenida.component';
import {TranslateModule} from '@ngx-translate/core';
import {TablesModule} from '@pages/tables/tables.module';

@NgModule({
  declarations: [
    BienvenidaComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ScrollToModule.forRoot(),
    FormsModule,
    NgApexchartsModule,
    NgbDropdownModule,
    NgbAccordionModule,
    NgbNavModule,
    NgbProgressbarModule,
    NgbCollapseModule,
    NgbTooltipModule,
    NgbPopoverModule,
    CountToModule,
    TablesModule,
    SharedModule,
    TranslateModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE'
    }),
    TranslateModule,
  ],
})
export class PagesModule {
}
