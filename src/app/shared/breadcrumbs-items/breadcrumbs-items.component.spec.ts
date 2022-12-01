import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsItemsComponent } from './breadcrumbs-items.component';

describe('BreadcrumbsItemsComponent', () => {
  let component: BreadcrumbsItemsComponent;
  let fixture: ComponentFixture<BreadcrumbsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbsItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
