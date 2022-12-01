import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {Conexion} from '@app/core/models/conexion';
import {ConexionFacade} from '@service/conexion/conexion.facade';
import {ID} from '@utils/constants';

@Injectable({
  providedIn: 'root'
})
export class ConexionResolver implements Resolve<Conexion | undefined> {

  constructor(private router: Router, private conexionFacade: ConexionFacade) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Conexion | undefined> {
    return route.params[ID] ?
      this.conexionFacade.consultarConexionPorId(route.params[ID]) :
      of(undefined);
  }
}
