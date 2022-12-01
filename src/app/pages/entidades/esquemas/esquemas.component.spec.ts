import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsquemasComponent } from './esquemas.component';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateModule} from '@ngx-translate/core';

describe('EsquemasComponent', () => {
  let component: EsquemasComponent;
  let fixture: ComponentFixture<EsquemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsquemasComponent ],
      imports: [NgbNavModule, RouterTestingModule, TranslateModule.forRoot()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsquemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
