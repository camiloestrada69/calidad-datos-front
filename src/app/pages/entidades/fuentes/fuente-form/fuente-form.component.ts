import { Component, OnInit } from '@angular/core';
import {BREAD_CRUMB_ITEMS_FORM_FUENTES} from '../../../../utils/constants';

@Component({
  selector: 'app-fuente-form',
  templateUrl: './fuente-form.component.html',
  styleUrls: ['./fuente-form.component.scss']
})
export class FuenteFormComponent implements OnInit {

  breadCrumbItems = BREAD_CRUMB_ITEMS_FORM_FUENTES;

  constructor() { }

  ngOnInit(): void {
  }

}
