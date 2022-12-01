import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {sizes} from '../../utils/constants';

@Component({
  selector: 'app-footer-pagination',
  templateUrl: './footer-pagination.component.html',
  styleUrls: ['./footer-pagination.component.scss']
})
export class FooterPaginationComponent implements OnInit {
  @Output() sizeEventEmitter = new EventEmitter<number>();
  @Output() pageEventEmitter = new EventEmitter<number>();
  @Input() totalElements = 0;
  sizes = sizes;
  size = sizes[0];
  pages: Array<number> = [];
  page = 1;
  constructor() { }

  ngOnInit(): void {
    this.calcularCantidadPaginas();
  }

  calcularCantidadPaginas(): void {
    this.pages = [];
    const cantidadPages = Math.ceil(this.totalElements / this.size);
    for (let i = 1; i <= cantidadPages; i++) {
      this.pages.push(i);
    }
    this.page = this.pages[0];
  }

  cambiarPagina(event: number): void{
    this.page = event;
    this.pageEventEmitter.emit(this.page);
  }

  cambiarPageSize(event: number): void{
    this.size = event;
    this.calcularCantidadPaginas();
    this.sizeEventEmitter.emit(this.size);
  }

}
