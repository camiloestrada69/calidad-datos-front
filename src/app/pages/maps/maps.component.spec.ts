import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsComponent } from './maps.component';
import {AgmCoreModule, MapsAPILoader} from '@agm/core';

describe('MapsComponent', () => {
  let component: MapsComponent;
  let fixture: ComponentFixture<MapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsComponent ],
      imports: [
        AgmCoreModule,
      ],
      providers: [{ provide: MapsAPILoader, useValue: { load: jasmine.createSpy('load').and.returnValue(new Promise(() => true)) }}],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
