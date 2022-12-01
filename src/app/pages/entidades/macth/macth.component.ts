import {Component, OnInit} from '@angular/core';
import {macthes} from '../../../utils/mockups';

@Component({
  selector: 'app-macth',
  templateUrl: './macth.component.html',
  styleUrls: ['./macth.component.scss']
})
export class MacthComponent implements OnInit {

  query = '';
  pageSize = 5;
  macthes = macthes;
  constructor() { }

  ngOnInit(): void {
  }

}
