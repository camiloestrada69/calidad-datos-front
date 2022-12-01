import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributosFormComponent } from './atributos-form.component';
import {TranslateModule} from '@ngx-translate/core';

describe('AtributosFormComponent', () => {
  let component: AtributosFormComponent;
  let fixture: ComponentFixture<AtributosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtributosFormComponent ],
      imports: [ TranslateModule.forRoot() ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtributosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
