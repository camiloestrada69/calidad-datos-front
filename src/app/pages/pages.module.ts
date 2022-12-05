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

import {TablesModule} from './tables/tables.module';
import {PagesRoutingModule} from './pages-routing.modules';
import {WidgetModule} from '@shared/widget/widget.module';
import {SharedModule} from '@shared/shared.module';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    WidgetModule,
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
