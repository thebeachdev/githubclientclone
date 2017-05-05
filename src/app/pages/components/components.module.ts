import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PaymentProcessingFormComponent } from './payment-processing-form/payment-processing-form.component';
import { SellingPointsComponent } from './selling-points/selling-points.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginFormComponent,
    SignupFormComponent,
    PaymentProcessingFormComponent,
    SellingPointsComponent
  ],
  exports: [
    LoginFormComponent,
    SignupFormComponent,
    PaymentProcessingFormComponent,
    SellingPointsComponent
  ]
})
export class ComponentsModule { }
