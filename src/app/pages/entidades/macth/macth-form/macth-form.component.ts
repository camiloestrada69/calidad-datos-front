import {Component, OnInit} from '@angular/core';
import {reglas} from '../../../../utils/mockups';
import {BREAD_CRUMB_ITEMS_FORM_MATCH} from '../../../../utils/constants';

@Component({
  selector: 'app-macth-form',
  templateUrl: './macth-form.component.html',
  styleUrls: ['./macth-form.component.scss']
})
export class MacthFormComponent implements OnInit {

  breadCrumbItems = BREAD_CRUMB_ITEMS_FORM_MATCH;
  reglas = reglas;

  constructor() { }

  ngOnInit(): void {
  }

}
