import { Component, OnInit } from '@angular/core';
import {etiquetas} from '../../../../utils/mockups';
import {BREAD_CRUMB_ITEMS_FORM_ATRIBUTOS} from '../../../../utils/constants';

@Component({
  selector: 'app-atributos-form',
  templateUrl: './atributos-form.component.html',
  styleUrls: ['./atributos-form.component.scss']
})
export class AtributosFormComponent implements OnInit {

  breadCrumbItems = BREAD_CRUMB_ITEMS_FORM_ATRIBUTOS;
  etiquetas = etiquetas;

  constructor() { }

  ngOnInit(): void {
  }

}
