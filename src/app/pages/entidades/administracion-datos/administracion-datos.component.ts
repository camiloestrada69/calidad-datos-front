import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';
import {treeTable} from '../../../utils/mockups';
import {COLUMNS_ADMINISTRACION_DATOS} from '../../../utils/constants';

@Component({
  selector: 'app-administracion-datos',
  templateUrl: './administracion-datos.component.html',
  styleUrls: ['./administracion-datos.component.scss']
})
export class AdministracionDatosComponent implements OnInit {
  filtro: any;
  files1: TreeNode[] = treeTable;

  cols = COLUMNS_ADMINISTRACION_DATOS;
  pageSize = 10;
  constructor() { }

  ngOnInit(): void {

  }

}
