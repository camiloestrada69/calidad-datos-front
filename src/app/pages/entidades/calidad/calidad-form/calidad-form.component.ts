import { Component, OnInit } from '@angular/core';
import {atributos, etiquetas, tipificaciones} from '../../../../utils/mockups';
import {ChangeEvent} from '@ckeditor/ckeditor5-angular';
import {BREAD_CRUMB_ITEMS_FORM_CALIDAD} from '../../../../utils/constants';

@Component({
  selector: 'app-calidad-form',
  templateUrl: './calidad-form.component.html',
  styleUrls: ['./calidad-form.component.scss']
})
export class CalidadFormComponent implements OnInit {
  breadCrumbItems = BREAD_CRUMB_ITEMS_FORM_CALIDAD;
  etiquetas = etiquetas;
  atributos = atributos;
  tipificaciones = tipificaciones;
  tipificacionSelected = tipificaciones[3];

  constructor() { }

  ngOnInit(): void {
  }

  cambiarTipificacion(event: any): void {
    this.tipificacionSelected = event;
  }

}
