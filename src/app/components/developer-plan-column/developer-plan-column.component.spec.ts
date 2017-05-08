import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperPlanColumnComponent } from './developer-plan-column.component';

describe('DeveloperPlanColumnComponent', () => {
  let component: DeveloperPlanColumnComponent;
  let fixture: ComponentFixture<DeveloperPlanColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperPlanColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperPlanColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
