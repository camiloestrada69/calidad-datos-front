import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroConexionComponent } from './registro-conexion.component';
import {TranslateModule} from '@ngx-translate/core';
import {RouterTestingModule} from '@angular/router/testing';

describe('RegistroConexionComponent', () => {
  let component: RegistroConexionComponent;
  let fixture: ComponentFixture<RegistroConexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroConexionComponent ],
      imports: [ TranslateModule.forRoot(), RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroConexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
