import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-esquema',
  templateUrl: './header-esquema.component.html',
  styleUrls: ['./header-esquema.component.scss']
})
export class HeaderEsquemaComponent implements OnInit {
  dateNow = Date.now();
  breadCrumbItems = [
    {
      label: 'entidades',
      active: false
    },
    {
      label: 'esquemas',
      active: false
    },
    {
      label: 'clientes',
      active: true
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
