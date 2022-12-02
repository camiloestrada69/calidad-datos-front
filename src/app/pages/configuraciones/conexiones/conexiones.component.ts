import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {
  AMBIENTE,
  BREAD_CRUMB_ITEMS_CONEXIONES,
  BUTTON_CREATE_CONNECTION,
  LIMIT,
  LINK_EDITAR_CONEXION,
  NOMBRE,
  PAGE
} from '@utils/constants';
import {AdvancedSortableDirective, SortEvent} from '../../tables/datatable/sortable.directive';
import {ConexionFacade} from '@service/conexion/conexion.facade';
import {Parametro} from '@app/core/models/parametro';
import {Conexion} from '@app/core/models/conexion';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-conexiones',
  templateUrl: './conexiones.component.html',
  styleUrls: ['./conexiones.component.scss']
})
export class ConexionesComponent implements OnInit {
  buttonCreacion = BUTTON_CREATE_CONNECTION;
  linkActualizacion = LINK_EDITAR_CONEXION;
  texto?: string;
  size = 5;
  page = 1;
  breadCrumbItems = BREAD_CRUMB_ITEMS_CONEXIONES;
  parametros: Array<Parametro> = [];
  conexiones: Array<Conexion> = [];
  idUsuario = 1;
  totalItems = 0;
  nombre = '';
  ambiente = '';

  @ViewChildren(AdvancedSortableDirective)
  headers!: QueryList<AdvancedSortableDirective>;

  constructor(private conexionFacade: ConexionFacade) {
    this.parametros.push({label: LIMIT, value: this.size});
    this.parametros.push({label: PAGE, value: this.page});
  }

  ngOnInit(): void {
    this.consultarConexionesPaginadas();
  }

  public cambiarPagina(page: number): void {
    this.page = page;
    this.refrescarFooter();
  }

  public cambiarSize(size: number): void {
    this.size = size;
    this.refrescarFooter();
  }

  refrescarFooter(): void {
    this.parametros = [];
    this.parametros.push({label: LIMIT, value: this.size});
    this.parametros.push({label: PAGE, value: this.page});
    this.consultarConexionesPaginadas();
  }

  consultarConexionesPaginadas(): void{
    this.conexionFacade.consultarConexionesPaginadas(this.idUsuario, this.parametros)
      .subscribe(({connexions, totalItems}) => {
        this.conexiones = connexions;
        this.totalItems = totalItems;
      });
  }

  agregarParametros(): void {
    this.parametros = this.parametros.filter(item => item.label !== NOMBRE && item.label !== AMBIENTE);
    this.parametros.push({label: NOMBRE, value: this.nombre});
    this.parametros.push({label: AMBIENTE, value: this.ambiente});
    this.consultarConexionesPaginadas();
  }

  eliminarConexion(id: any): void{
      this.conexionFacade.eliminarConexion(id).pipe(
        switchMap(() =>
          this.conexionFacade.consultarConexionesPaginadas(this.idUsuario, this.parametros))
      ).subscribe(({connexions, totalItems}) => {
        this.conexiones = connexions;
        this.totalItems = totalItems;
      });
  }
  onSort({ column, direction }: SortEvent): any {
    // resetting other headers
    /*this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;*/
  }

  trackByFn(index: any): any{
    return index; // or item.id
  }

}
