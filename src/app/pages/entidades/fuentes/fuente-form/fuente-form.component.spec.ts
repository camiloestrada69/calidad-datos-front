import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuenteFormComponent } from './fuente-form.component';
import {TranslateModule} from '@ngx-translate/core';

describe('FuenteFormComponent', () => {
  let component: FuenteFormComponent;
  let fixture: ComponentFixture<FuenteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuenteFormComponent ],
      imports: [ TranslateModule.forRoot() ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuenteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
