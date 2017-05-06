import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PaymentProcessingFormComponent} from './payment-processing-form.component';

describe('PaymentProcessingFormComponent', () => {
  let component: PaymentProcessingFormComponent;
  let fixture: ComponentFixture<PaymentProcessingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentProcessingFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentProcessingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
