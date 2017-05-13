import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingPage } from './pricing-page.component';

describe('PricingPage', () => {
  let component: PricingPage;
  let fixture: ComponentFixture<PricingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
