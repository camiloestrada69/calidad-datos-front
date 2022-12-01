import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFormComponent } from './job-form.component';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule} from '@ngx-translate/core';

describe('JobFormComponent', () => {
  let component: JobFormComponent;
  let fixture: ComponentFixture<JobFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobFormComponent ],
      imports: [NgbDatepickerModule, TranslateModule.forRoot()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
