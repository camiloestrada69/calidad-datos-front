import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionConexionComponent } from './configuracion-conexion.component';
import {TranslateModule} from '@ngx-translate/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ConfiguracionConexionComponent', () => {
  let component: ConfiguracionConexionComponent;
  let fixture: ComponentFixture<ConfiguracionConexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionConexionComponent ],
      imports: [
        TranslateModule.forRoot(),
        ReactiveFormsModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracionConexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
