import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacthComponent } from './macth.component';
import {TranslateModule} from '@ngx-translate/core';

describe('MacthComponent', () => {
  let component: MacthComponent;
  let fixture: ComponentFixture<MacthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacthComponent ],
      imports: [ TranslateModule.forRoot() ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
