import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreePlanColumnComponent } from './free-plan-column.component';

describe('FreePlanColumnComponent', () => {
  let component: FreePlanColumnComponent;
  let fixture: ComponentFixture<FreePlanColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreePlanColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreePlanColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
