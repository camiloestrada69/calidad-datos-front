import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmmailComponent } from './confirmmail.component';

describe('ConfirmmailComponent', () => {
  let component: ConfirmmailComponent;
  let fixture: ComponentFixture<ConfirmmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('probando cualquier cosa', () => {
  const hola = 'hola';
  let component: ConfirmmailComponent;
  let fixture: ComponentFixture<ConfirmmailComponent>;
  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('prueba', () => {
    const respuesta = component.probando() === 'a';
    expect(true).toBeTruthy(true);
  });
});
