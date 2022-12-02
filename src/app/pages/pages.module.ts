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

import {UtilityModule} from './utility/utility.module';
import {AdvancedModule} from './advanced/advanced.module';
import {FormModule} from './form/form.module';
import {TablesModule} from './tables/tables.module';
import {IconsModule} from './icons/icons.module';
import {AppsModule} from './apps/apps.module';
import {PagesRoutingModule} from './pages-routing.modules';
import {DashboardsComponent} from './dashboards/dashboards.component';
import {WidgetModule} from '../shared/widget/widget.module';
import {UiComponent} from './ui/ui.component';
import {TypographyComponent} from './typography/typography.component';
import {ChartsComponent} from './charts/charts.component';
import {MapsComponent} from './maps/maps.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {BienvenidaComponent} from './bienvenida/bienvenida.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    DashboardsComponent,
    UiComponent,
    TypographyComponent,
    ChartsComponent,
    MapsComponent,
    BienvenidaComponent
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
    UtilityModule,
    AdvancedModule,
    FormModule,
    TablesModule,
    IconsModule,
    AppsModule,
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
