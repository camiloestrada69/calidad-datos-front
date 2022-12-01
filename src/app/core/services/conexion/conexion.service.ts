import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StandardResponse} from '@app/core/models/standarResponse';
import {environment} from '@env/environment';
import {HTTP_OPTIONS} from '@utils/constants';
import {Conexion} from '@app/core/models/conexion';


const api = environment.serverApiUrl;
const tag = 'conexiones';


@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor(private http: HttpClient) {
  }

  public consultarTodasLasConexiones(): Observable<StandardResponse> {
    return this.http.get(`${api}${tag}`, HTTP_OPTIONS);
  }

  public crearConexion(conexion: Conexion): Observable<StandardResponse>{
    return this.http.post(`${api}${tag}`, conexion, HTTP_OPTIONS);
  }

  public actualizarConexion(conexion: Conexion): Observable<StandardResponse>{
    return this.http.put(`${api}${tag}`, conexion, HTTP_OPTIONS);
  }

  public consultarConexionesPaginadas(idUsuario: number, parametros: HttpParams): Observable<StandardResponse>{
    return this.http.get(`${api}${tag}/paginadas/${idUsuario}`,
      {headers: HTTP_OPTIONS.headers, params: parametros});
  }

  public consultarConexionPorId(id: number): Observable<StandardResponse>{
    return this.http.get(`${api}${tag}/${id}`, HTTP_OPTIONS);
  }

  public eliminarConexion(id: number): Observable<StandardResponse> {
    return this.http.delete(`${api}${tag}/${id}`, HTTP_OPTIONS);
  }
}
