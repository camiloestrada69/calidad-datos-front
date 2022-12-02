import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedformComponent } from './advancedform.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

describe('AdvancedformComponent', () => {
  let component: AdvancedformComponent;
  let fixture: ComponentFixture<AdvancedformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,
        NgbModule],
      declarations: [ AdvancedformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
