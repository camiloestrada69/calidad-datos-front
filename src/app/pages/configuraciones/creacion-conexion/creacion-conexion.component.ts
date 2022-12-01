import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ConexionFacade} from '@service/conexion/conexion.facade';
import {ActivatedRoute, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {ConexionResolver} from '@app/core/resolvers/conexion.resolver';
import {map} from 'rxjs/internal/operators';
import {LINK_CONEXIONES} from '@utils/constants';

@Component({
  selector: 'app-creacion-conexion',
  templateUrl: './creacion-conexion.component.html',
  styleUrls: ['./creacion-conexion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreacionConexionComponent implements OnInit{
  @Input() conexion: any;
  @Input() isActualizacion = false;

  constructor(private conexionFacade: ConexionFacade, protected readonly router: Router) {
  }

  ngOnInit(): void {
  }

  guardarConexion(): void {
    this.isActualizacion ? this.actualizaConexion() : this.crearConexion();
  }
  crearConexion(): void{
    this.conexionFacade.crearConexion(this.conexion)
      .subscribe(() => this.router.navigate([LINK_CONEXIONES]))
  }
  actualizaConexion(): void {
    this.conexionFacade.actualizaConexion(this.conexion)
      .subscribe(() => this.router.navigate([LINK_CONEXIONES]));
  }
}
