import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-breadcrumbs-items',
  templateUrl: './breadcrumbs-items.component.html',
  styleUrls: ['./breadcrumbs-items.component.scss']
})
export class BreadcrumbsItemsComponent{

  @Input()
  breadcrumbItems!: Array<{
    active: boolean;
    label: string;
  }>;
}
