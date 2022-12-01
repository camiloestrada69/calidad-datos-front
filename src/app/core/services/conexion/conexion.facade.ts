import {Injectable} from '@angular/core';
import {ConexionService} from '@service/conexion/conexion.service';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import {map} from 'rxjs/internal/operators';
import {Conexion} from '@app/core/models/conexion';
import {Parametro} from '@app/core/models/parametro';
import {HttpUtils} from '@utils/httpUtils';

@Injectable({
  providedIn: 'root'
})
export class ConexionFacade extends HttpUtils{

  constructor(private conexionService: ConexionService) {
    super();
  }

  consultarTodasLasConexiones(): Observable<Conexion> {
    return this.conexionService.consultarTodasLasConexiones()
      .pipe(
        filter(response => response && response.body),
        map(response => response.body)
      );
  }
  crearConexion(conexion: Conexion): Observable<any> {
    return this.conexionService.crearConexion(conexion)
      .pipe(
        filter(response => response && response.body),
        map(response => response.body)
      );
  }

  actualizaConexion(conexion: Conexion): Observable<any> {
    return this.conexionService.actualizarConexion(conexion)
      .pipe(
        filter(response => response && response.body),
        map(response => response.body)
      );
  }

  consultarConexionesPaginadas(idUsuario: number, parametros: Parametro[]): Observable<any> {
    const params = this.transformQueryParametersIterator(parametros);
    return this.conexionService.consultarConexionesPaginadas(idUsuario, params)
      .pipe(
        filter(response => response.body),
        map(response => {
          return {connexions: response.body.items, totalItems: response.body.meta.totalItems};
        })
      );
  }

  consultarConexionPorId(id: number): Observable<Conexion> {
    return this.conexionService.consultarConexionPorId(id).pipe(
      filter(response => response.body),
      map(response => {
        return response.body;
      })
    );
  }

  eliminarConexion(id: number): Observable<any> {
    return this.conexionService.eliminarConexion(id)
      .pipe(
        filter(response => response && response.body),
        map(response => response.body)
      );
  }
}

