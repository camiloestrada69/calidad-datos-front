import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionConexionComponent } from './creacion-conexion.component';
import {TranslateModule} from '@ngx-translate/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CreacionConexionComponent', () => {
  let component: CreacionConexionComponent;
  let fixture: ComponentFixture<CreacionConexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionConexionComponent ],
      imports: [ TranslateModule.forRoot(), HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacionConexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
