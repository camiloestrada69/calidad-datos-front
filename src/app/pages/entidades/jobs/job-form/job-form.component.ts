import {Component, OnInit} from '@angular/core';
import {BREAD_CRUMB_ITEMS_FORM_JOBS, SEMANA, TIEMPOS} from '../../../../utils/constants';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent implements OnInit {

  breadCrumbItems = BREAD_CRUMB_ITEMS_FORM_JOBS;
  semana = SEMANA;
  tiempos = TIEMPOS;
  tiempoSeleccionado = TIEMPOS[0];


  constructor() { }

  ngOnInit(): void {
  }

  cambiarTiempo(event: any): void{
    this.tiempoSeleccionado = event;
  }

}
