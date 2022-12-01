import { Component, OnInit } from '@angular/core';
import {jobs, usos} from '../../../utils/mockups';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  query = '';
  pageSize = 10;
  jobs = jobs;
  constructor() { }

  ngOnInit(): void {
  }

}
