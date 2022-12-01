import { Component, OnInit } from '@angular/core';
import {atributos} from '../../../../utils/mockups';

@Component({
  selector: 'app-atributos-list',
  templateUrl: './atributos-list.component.html',
  styleUrls: ['./atributos-list.component.scss']
})
export class AtributosListComponent implements OnInit {

  query = '';
  pageSize = 10;
  atributos = atributos;
  constructor() { }

  ngOnInit(): void {
  }

}
