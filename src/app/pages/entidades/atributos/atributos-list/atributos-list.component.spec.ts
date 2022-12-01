import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributosListComponent } from './atributos-list.component';
import {TranslateModule} from '@ngx-translate/core';

describe('AtributosListComponent', () => {
  let component: AtributosListComponent;
  let fixture: ComponentFixture<AtributosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtributosListComponent ],
      imports: [ TranslateModule.forRoot() ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtributosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
