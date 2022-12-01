import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionDatosComponent } from './administracion-datos.component';
import {TranslateModule} from '@ngx-translate/core';

describe('AdministracionDatosComponent', () => {
  let component: AdministracionDatosComponent;
  let fixture: ComponentFixture<AdministracionDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministracionDatosComponent ],
      imports: [ TranslateModule.forRoot() ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministracionDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
