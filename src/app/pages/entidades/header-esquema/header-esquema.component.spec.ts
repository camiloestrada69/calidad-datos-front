import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEsquemaComponent } from './header-esquema.component';
import {TranslateModule} from '@ngx-translate/core';

describe('HeaderEsquemaComponent', () => {
  let component: HeaderEsquemaComponent;
  let fixture: ComponentFixture<HeaderEsquemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderEsquemaComponent ],
      imports: [ TranslateModule.forRoot() ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderEsquemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
