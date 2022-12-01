import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {navItems} from '../../../utils/mockups';

@Component({
  selector: 'app-esquemas',
  templateUrl: './esquemas.component.html',
  styleUrls: ['./esquemas.component.scss']
})
export class EsquemasComponent implements OnInit {
  navItems = navItems;
  itemSelected =  navItems[0];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.itemSelected = this.navItems.filter(item => item.url.split('/')[4] === this.router.url.split('/')[4])[0];
  }

  ruteo(event: any): void {
    this.router.navigate([event.nextId.url]);
  }

}
