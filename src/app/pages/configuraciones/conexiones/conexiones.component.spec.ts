import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexionesComponent } from './conexiones.component';
import {TranslateModule} from '@ngx-translate/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ConexionesComponent', () => {
  let component: ConexionesComponent;
  let fixture: ComponentFixture<ConexionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConexionesComponent ],
      imports: [ TranslateModule.forRoot(), HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConexionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
