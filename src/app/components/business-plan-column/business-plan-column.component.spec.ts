import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPlanColumnComponent } from './business-plan-column.component';

describe('BusinessPlanColumnComponent', () => {
  let component: BusinessPlanColumnComponent;
  let fixture: ComponentFixture<BusinessPlanColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessPlanColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPlanColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
