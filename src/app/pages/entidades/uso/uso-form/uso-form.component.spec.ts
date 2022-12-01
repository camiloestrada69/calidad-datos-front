import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoFormComponent } from './uso-form.component';
import {TranslateModule} from '@ngx-translate/core';

describe('UsoFormComponent', () => {
  let component: UsoFormComponent;
  let fixture: ComponentFixture<UsoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsoFormComponent ],
      imports: [TranslateModule.forRoot()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
