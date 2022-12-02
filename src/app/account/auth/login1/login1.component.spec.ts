import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login1Component } from './login1.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('Login1Component', () => {
  let component: Login1Component;
  let fixture: ComponentFixture<Login1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,
      HttpClientTestingModule],
      declarations: [ Login1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Login1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
