import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagetitleComponent } from './pagetitle/pagetitle.component';
import { ListaVaciaComponent } from './lista-vacia/lista-vacia.component';
import {RouterLinkWithHref} from '@angular/router';
import { BreadcrumbsItemsComponent } from './breadcrumbs-items/breadcrumbs-items.component';
import {TranslateModule} from '@ngx-translate/core';
import { FooterPaginationComponent } from './footer-pagination/footer-pagination.component';
import {FormsModule} from '@angular/forms';
import {NgbToastModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    PagetitleComponent,
    ListaVaciaComponent,
    BreadcrumbsItemsComponent,
    FooterPaginationComponent
  ],
    imports: [
        CommonModule,
        RouterLinkWithHref,
        TranslateModule,
        FormsModule,
        NgbToastModule
    ],
  exports: [PagetitleComponent, ListaVaciaComponent, BreadcrumbsItemsComponent, FooterPaginationComponent]
})
export class SharedModule { }
