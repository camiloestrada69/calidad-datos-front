import { Component, OnInit } from '@angular/core';
import {usos} from '../../../utils/mockups';

@Component({
  selector: 'app-uso',
  templateUrl: './uso.component.html',
  styleUrls: ['./uso.component.scss']
})
export class UsoComponent implements OnInit {
  query = '';
  pageSize = 10;
  usos = usos;

  constructor() { }

  ngOnInit(): void {
  }

}
