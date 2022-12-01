import { Component, OnInit } from '@angular/core';
import {calidadDatos} from '../../../utils/mockups';

@Component({
  selector: 'app-calidad',
  templateUrl: './calidad.component.html',
  styleUrls: ['./calidad.component.scss']
})
export class CalidadComponent implements OnInit {
  query = '';
  pageSize = 10;
  datosCalidad = calidadDatos;

  constructor() { }

  ngOnInit(): void {
  }

}
