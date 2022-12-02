import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import Stepper from 'bs-stepper';
import {conexiones} from '../../../utils/mockups';
import {BREAD_CRUMB_ITEMS_CREAR_CONEXION} from '../../../utils/constants';
import {Conexion} from '@app/core/models/conexion';
import {filter} from 'rxjs/operators';
import {map} from 'rxjs/internal/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-registro-conexion',
  templateUrl: './registro-conexion.component.html',
  styleUrls: ['./registro-conexion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistroConexionComponent implements OnInit {

  conexion = conexiones[0];
  nuevaConexion: Conexion = new Conexion();
  isActualizacion = false;

  private stepper: Stepper | undefined;

  breadCrumbItems = BREAD_CRUMB_ITEMS_CREAR_CONEXION;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.pipe(
      filter(data => data.conexionResolver),
      map(data => data.conexionResolver)
    ).subscribe(data => {
      this.nuevaConexion = data;
      this.isActualizacion = true;
    });
    const stepperElement = document.querySelector('#stepper1');
    if (stepperElement !== null){
      this.stepper = new Stepper(stepperElement , {
        linear: false,
        animation: true
      });
    }
  }
  next(): void {
    if (this.stepper) {
      this.stepper.next();
    }
  }
  onSubmit(): boolean {
    return false;
  }

  probarConexion(conexionProbada: Conexion): void {
    if (!conexionProbada) {
      return;
    }
    this.nuevaConexion = conexionProbada;
    this.next();
  }

}
