import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVaciaComponent } from './lista-vacia.component';
import {TranslateModule} from '@ngx-translate/core';

describe('ListaVaciaComponent', () => {
  let component: ListaVaciaComponent;
  let fixture: ComponentFixture<ListaVaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaVaciaComponent ],
      imports: [TranslateModule.forRoot()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaVaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
