import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacthFormComponent } from './macth-form.component';
import {TranslateModule} from '@ngx-translate/core';

describe('MacthFormComponent', () => {
  let component: MacthFormComponent;
  let fixture: ComponentFixture<MacthFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacthFormComponent ],
      imports: [ TranslateModule.forRoot() ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
