import {Component, OnInit} from '@angular/core';
import {fuentesDatos} from '../../../utils/mockups';

@Component({
  selector: 'app-fuentes',
  templateUrl: './fuentes.component.html',
  styleUrls: ['./fuentes.component.scss']
})
export class FuentesComponent implements OnInit {
  query = '';
  pageSize = 10;
  fuentes = fuentesDatos;

  constructor() { }

  ngOnInit(): void {
  }

}
