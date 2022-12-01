import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalidadFormComponent } from './calidad-form.component';
import {TranslateModule} from '@ngx-translate/core';

describe('CalidadFormComponent', () => {
  let component: CalidadFormComponent;
  let fixture: ComponentFixture<CalidadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalidadFormComponent ],
      imports: [ TranslateModule.forRoot() ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalidadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
