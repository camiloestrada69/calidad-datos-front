import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoComponent } from './uso.component';
import {TranslateModule} from '@ngx-translate/core';

describe('UsoComponent', () => {
  let component: UsoComponent;
  let fixture: ComponentFixture<UsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsoComponent ],
      imports: [TranslateModule.forRoot()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
