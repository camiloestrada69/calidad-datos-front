import { Component, OnInit } from '@angular/core';
import {BREAD_CRUMB_ITEMS_FORM_USOS} from '../../../../utils/constants';

@Component({
  selector: 'app-uso-form',
  templateUrl: './uso-form.component.html',
  styleUrls: ['./uso-form.component.scss']
})
export class UsoFormComponent implements OnInit {

  breadCrumbItems = BREAD_CRUMB_ITEMS_FORM_USOS;

  constructor() { }

  ngOnInit(): void {
  }

}
