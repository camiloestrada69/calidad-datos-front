import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverpwdComponent } from './recoverpwd.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('RecoverpwdComponent', () => {
  let component: RecoverpwdComponent;
  let fixture: ComponentFixture<RecoverpwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ RecoverpwdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverpwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
